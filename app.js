'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _pathConfig = require('./server-dist/models/path-config.js');

var _pathConfig2 = _interopRequireDefault(_pathConfig);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var folder = process.argv[2] || '/dist';

var app = (0, _express2.default)();
app.use((0, _compression2.default)());

var viewsDir = './server-dist/views';
var pathConfig = new _pathConfig2.default('/../..' + folder);

// setup express to use handlebars as the templating engine
var hbs = _expressHandlebars2.default.create({
    defaultLayout: 'main',
    layoutsDir: _path2.default.join(__dirname, viewsDir + '/layouts'),
    partialsDir: _path2.default.join(__dirname, viewsDir + '/partials')
});
app.set('views', _path2.default.join(__dirname, '' + viewsDir));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use live reload if debug environment
if (folder === '/src') {
    app.use(require('connect-livereload')());
}

// setup server for static assets
app.use('/', _express2.default.static(_path2.default.join(__dirname, folder)));

// setup server urls
app.get('/*', function (req, res) {
    // retrieve the path from the request URL
    var urlSections = req.path.split('/');
    urlSections = urlSections.filter(function (sectionString) {
        return sectionString.length > 0;
    });

    var urlPath = null;
    if (urlSections.length === 0) {
        urlPath = '/';
    } else {
        urlPath = '/' + urlSections[0];
    }

    // retrieve the server-side configuration for the current URL
    var pathConfigData = pathConfig.getConfig(urlPath);

    if (!pathConfigData) {
        res.status(404).send();
        return;
    }

    res.render(pathConfigData.data.view, pathConfigData);
});

var port = process.env.port || 3000;
app.listen(port, function () {
    console.log('Running FF International (' + folder + ') on localhost:' + port);
});

module.exports = app;