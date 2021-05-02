'use strict';

const controller = require('../controllers/controller');

module.exports = function(app) {

    app.route('/')
        .get((req, res) => {
            res.status(200);
            res.send("V1 Routes");
        });

    app.route('/about')
        .get(controller.about);

    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);

    return app;
};