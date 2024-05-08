class SiteController {
  // [ GET /]

  index(req, res) {
    res.render("home");
  }

  // //[GET/product:slug]
  show(req, resf) {
    res.send("new site");
  }
}
module.exports = new SiteController();
