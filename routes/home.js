
module.exports = (app) => { 

  app.get('/', (req, res) => {
    const HomeController = require('../controllers/HomeController');
    const home = new HomeController(app, req, res);
    home.index();
  });

};