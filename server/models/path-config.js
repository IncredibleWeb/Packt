import fs from 'fs';
import path from 'path';

export default class {
    constructor(folder) {
        this.folder = folder;
        this.pathConfigs = {
            '/': {
                view: 'index',
                metaTitle: 'HIIT - Packt PWA Demo',
                title: 'HIIT',
                inlineStyles: this.getFileContents(['/css/inline.css']),
                remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
                remoteScripts: ['/script.js']
            },
            '/settings': {
                view: 'settings',
                metaTitle: 'Settings - Packt PWA Demo',
                title: 'Settings',
                inlineStyles: this.getFileContents(['/css/inline.css']),
                remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
                remoteScripts: ['/script.js']
            },
            '/challenges': {
                view: 'challenges',
                metaTitle: 'Challenges - Packt PWA Demo',
                title: 'Challenges',
                inlineStyles: this.getFileContents(['/css/inline.css']),
                remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
                remoteScripts: ['/script.js']
            }
        };
    }

    // retrieve the navigation menu for a given route
    getNavMenu(urlPath) {
        return {
            'Challenges': {
                'title': 'Challenges',
                'url': '/challenges',
                'icon': '/img/ic_trophy_black_24px.svg',
                'isActive': urlPath === '/challenges'
            },
            'Settings': {
                'title': 'Settings',
                'url': '/settings',
                'icon': '/img/ic_settings_black_24px.svg',
                'isActive': urlPath === '/settings'
            }
        };
    }

    // retrieves the contents from a file on the file system
    getFileContents(files) {
        let self = this;
        // concat inline styles for document <head>
        let flattenedContents = '';
        files.forEach(function(file) {
            flattenedContents += fs.readFileSync(path.resolve(__dirname) + self.folder + file);
        });

        return flattenedContents;
    }

    // retrieve the configuration for a given route
    getConfig(urlPath) {
        let object = this.pathConfigs[urlPath];

        // check if the path is actually valid.
        if (!object) {
            return null;
        }

        // retrieve the nav menu
        object.navMenu = this.getNavMenu(urlPath);

        return {
            'data': object
        };
    }
}
