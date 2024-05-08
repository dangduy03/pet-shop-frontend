class ProductAdminController {
  // [ render ra index ]
  index(req, res) {
    res.render("product");
  }


  show(req,resf){
    res.send ("new detail")
  }
}
module.exports = new ProductAdminController();
 