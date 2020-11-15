const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/products", ProductController.getProducts);
  app.get("/product/:id", ProductController.getProduct);
  app.post("/products/new", ProductController.createProduct);
  app.put("/product/:id", ProductController.updateProduct);
  app.delete("/product/:id", ProductController.deleteProduct);
};
