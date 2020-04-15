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
  ProductData.create(req.body)
    .then(productData => {
      if (req.user) productData.setUser(req.user.id);
      productData.setStyle(req.body.styleId)
      res.send(productData)
    })
})







router.get("/productData/:id", function (req, res) {
  ProductData.findByPk(req.params.id).then(data => res.send(data));
});


router.put("/modifyQuantity", function (req, res) {
  ProductData.update(
    { quantity: req.body.quantity },
    { returning: true, where: { id: req.body.productDataId } }
  )
    .then(([rowsUpdate, [updatedData]]) => {
      res.json(updatedData);
    })
    .catch(err => console.log("error:", err));
});


router.put("/modifyData", function (req, res) {
  console.log("BODY:", req.body)
  ProductData.update(
    req.body,
    { returning: true, where: { id: req.body.id } }
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


  Size.findByPk(req.body.sizeId).then(size => {
    Frame.findByPk(req.body.frameId).then(frame => {
      Style.findByPk(req.body.styleId).then(style => {
        res.send({
          size: size,
          frame: frame,
          // style: style
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
  Product.findOrCreate({
    where: {
      // digital: req.body.digital,
      frameId: req.body.frameId,
      sizeId: req.body.sizeId,
      styleId: parseInt(req.body.styleId)
    }
  }).spread(function (product, created) {
    res.json(product);
  });
});



router.get("/styles/:id", function (req, res, next) {
  Style.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(() => console.log("el archivo no esta"));
});

router.post("/getAllStyles", function (req, res) {
  console.log("entre a todos los estilos");
  Style.findAll().then(allStyles => {
    console.log('aquii estan los estilos', allStyles);

    res.send(
      allStyles,
    )
  })
});


router.post("/getAllFrames", function (req, res) {
  console.log("ENTRE A TODOS MARCOS");
  Frame.findAll().then(allFrames => {
    console.log('aquii estan los estilos', allFrames);

    res.send(
      allFrames,
    )
  })
});

router.post("/getAllfss", function (req, res) {
  Frame.findAll().then(frames => {
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

module.exports = router
