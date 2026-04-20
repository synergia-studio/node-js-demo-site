  const path = require('path');

  class TechnologiesController {

        app;
        req;
        res;
s
        constructor(app, req, res) {
            this.app = app;
            this.req = req;
            this.res = res;
        };

        // GET /technologies 
        index() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000'
            this.res.render(path.join(__dirname, '../views/technologies.ejs'), {
              site_title  : 'Technologies Page',
              site_url: 'http://' + hostname + '/',
              technologies_menu_link_active: 'active',
              header_title: "Technologies",
              main_section_title: 'Technologies'
            });
        };

    };

module.exports = TechnologiesController;

