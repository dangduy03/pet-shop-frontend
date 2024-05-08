const productRouter = require("./product_admin");
const categoryRouter = require("./category_admin");
const siteRouter = require("./site");
function route(app) {
  app.use("/product", productRouter);
  app.use("/category", categoryRouter);
  app.use("/", siteRouter);
  app.get("");
}
module.exports = route;
