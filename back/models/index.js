const db = require("../db/index");

const Product = require("./product");
const User = require("./user");
const Order = require("./order");
const Frame = require("./frame");
const Style = require("./style");
const Size = require("./size");
const ProductData = require("./productData");
const Display = require("./display");
const PuntoDeEncuentro = require("./puntoDeEncuentro");

ProductData.belongsTo(Product);
ProductData.belongsTo(Order);
ProductData.belongsTo(User);
ProductData.belongsTo(Style);

Product.belongsTo(Frame);
Product.belongsTo(Style);
Product.belongsTo(Size);

Order.belongsTo(User);
Order.belongsTo(PuntoDeEncuentro);

Display.belongsTo(Style);

module.exports = {
  db,
  User,
  Product,
  Frame,
  Style,
  Size,
  ProductData,
  Display,
  Order,
  PuntoDeEncuentro
};
