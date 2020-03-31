const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const ProductData = require("../models/productData");
const User = require("../models/user");
const Size = require("../models/size");
const Frame = require("../models/frame");
const Style = require("../models/style");

/* cambiar el nombre de la ruta de nuevo producto a newDataProduct*/
router.post('/nuevoproducto', function (req, res) {
  console.log('CREANDO DATA', req.body); feature/localStorage
  ProductData.create(req.body)
    .then(productData => res.send(productData))});

//   ProductData.create(req.body).then(productData => {
//     User.findByPk(req.user.id).then(user => {
//       Product.findByPk(req.body.productId).then(product => {
//         productData.setProduct(product);
//         productData.setUser(user);
//         res.json(productData);
//       });
//     });
//   });
// });

router.get("/productData/:id", function (req, res) {
  ProductData.findByPk(req.params.id).then(data => res.send(data));
});

router.put("/modifyDataProduct", function (req, res) {
  console.log("BODY:", req.body);
  ProductData.update(
    { quantity: req.body.quantity },
    { returning: true, where: { id: req.body.productDataId } }
  )
    .then(([rowsUpdate, [updatedData]]) => {
      res.json(updatedData);
    })
    .catch(err => console.log("error:", err));
});

router.post("/getUserProducts", (req, res) => {
  Product.findOne({
    where: {
      id: req.body.productId
    }
  }).then(product => {
    console.log("userProducst:", product);
    res.json(product);
  });
});

router.post("/getProductFSS", (req, res) => {
  console.log("BODY:", req.body);

  Size.findByPk(req.body.sizeId).then(size => {
    Frame.findByPk(req.body.frameId).then(frame => {
      Style.findByPk(req.body.styleId).then(style => {
        res.send({
          size: size,
          frame: frame,
          style: style
        });
      });
    });
  });
});

router.post("/newProductData", function (req, res) {

  ProductData.create(req.body).then(productData => {
    User.findByPk(req.user.id).then(user => {
      Product.findByPk(req.body.productId).then(product => {
        productData.setProduct(product);
        productData.setUser(user);
        res.json(productData);
      });
    });
  });
});

router.post("/newProduct", function (req, res) {
  console.log('esto es el body', req.body)
  Product.findOrCreate({
    where: {
      // digital: req.body.digital,
      frameId: req.body.frameId,
      sizeId: req.body.sizeId,
      styleId: req.body.styleId
    }
  }).spread(function (product, created) {
    res.json(product);
  });
});

router.get("/getProducts", function (req, res) {
  Product.findAll().then(function (products) {
    res.json(products);
  });
});

router.get("/styles/:id", function (req, res, next) {
  Style.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => console.log("el archivo no esta"));
});

router.post("/getAllfss", function (req, res) {
  console.log("entre");
  Frame.findAll().then(frames => {
    console.log("fffffffffffff", frames);
    Style.findAll().then(styles => {
      Size.findAll().then(sizes => {
        res.send({
          frames: frames,
          styles: styles,
          sizes: sizes
        });
      });
    });
  });
});

router.get("/:id", function (req, res) {
  Product.findByPk(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
