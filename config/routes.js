const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const tripController = require('../controllers/trip');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(tripController);

    app.get('*', (req, res) => {
        res.status(404).render('404', { title: 'Page Not Found!' });
    });
};