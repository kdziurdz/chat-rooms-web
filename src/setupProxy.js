const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/ws', { target: 'http://localhost:8080', ws: true }));
    app.use(proxy('/ws-api', { target: 'http://localhost:8080', ws: true }));
};