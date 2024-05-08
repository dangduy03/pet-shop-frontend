class CategoryAdminController {
 // [ render ra index ]
 index(req, res) {
   res.render("category");
 }


 show(req,res){
   res.send ("new category")
 }
}
module.exports = new CategoryAdminController();
