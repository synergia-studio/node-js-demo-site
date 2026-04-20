  const path = require('path');
  
  class HomeController {

        app;
        req;
        res;
s
        constructor(app, req, res) {
            this.app = app;
            this.req = req;
            this.res = res;
        };

        // GET /
        index() {
          var hostname = this.req.headers.host; // hostname = 'localhost:3000'
          this.res.render(path.join(__dirname, '../views/home.ejs'), {
            site_title  : 'Home page',
            site_url: 'http://' + hostname + '/',
            home_menu_link_active: 'active',
            header_title: "Home",
            main_section_title: 'Introduction'
          });
        };

    }

module.exports = HomeController;
