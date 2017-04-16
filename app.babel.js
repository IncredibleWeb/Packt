'use strict';

import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import PathConfig from './server-dist/models/path-config.js';
import compression from 'compression';

let folder = process.argv[2] || '/dist';

let app = express();
app.use(compression());

let viewsDir = './server-dist/views';
let pathConfig = new PathConfig(`/../..${folder}`);

// setup express to use handlebars as the templating engine
let hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, `${viewsDir}/layouts`),
    partialsDir: path.join(__dirname, `${viewsDir}/partials`)
});
app.set('views', path.join(__dirname, `${viewsDir}`));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use live reload if debug environment
if (folder === '/src') {
    app.use(require('connect-livereload')());
}

// setup server for static assets
app.use('/', express.static(path.join(__dirname, folder)));

// setup server urls
app.get('/*', (req, res) => {
    // retrieve the path from the request URL
    let urlSections = req.path.split('/');
    urlSections = urlSections.filter((sectionString) => {
        return sectionString.length > 0;
    });

    let urlPath = null;
    if (urlSections.length === 0) {
        urlPath = '/';
    } else {
        urlPath = '/' + urlSections[0];
    }

    // retrieve the server-side configuration for the current URL
    let pathConfigData = pathConfig.getConfig(urlPath);

    if (!pathConfigData) {
        res.status(404).send();
        return;
    }

    res.render(pathConfigData.data.view, pathConfigData);
});

let port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Running FF International (${folder}) on localhost:${port}`);
});

module.exports = app;
