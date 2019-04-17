require('babel-register');

const router = require('./client/src/App').default;
const Sitemap = require('./client/src').default;

(
    new Sitemap(router)
        .build('https://www.basic.am')
        .save('./sitemap.xml')
);