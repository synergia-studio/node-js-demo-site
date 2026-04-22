  const path = require('path');

    class AboutUsController {

        app;
        req;
        res;
s
        constructor(app, req, res) {
            this.app = app;
            this.req = req;
            this.res = res;
        };

        // GET /about-us 
        index() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000'
            this.res.render(path.join(__dirname, '../views/about-us.ejs'), {
                site_title  : 'About Us Page',
                site_url: 'http://' + hostname + '/',
                about_menu_link_active: 'active',
                header_title: "About Us",
                main_section_title: 'About Us'
            });
        };

    }

module.exports = AboutUsController;
