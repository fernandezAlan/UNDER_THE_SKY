const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const ProductData = require("../models/productData");
const PuntoDeEncuentro = require("../models/puntoDeEncuentro");

/*
        NOTAS IMPORTANTES de addOrder:
         en req.body.productDataId debe recibir un arreglo con los ids de los productos.
         en req.body.order solo hay un objeto con la data de la orden
         (solo se crea una orden para todos productos que llegen en el body)
         setearle el usuario a la orden es opcional(se puede comprar sin estar registrado)
         req.body.order.deliveryPoint es un booleano que especifica si el punto de entrega existe
*/
router.post("/addOrder", function (req, res) {
  // let orderEmail = ''
  // ProductData.findAll({
  //     where:{
  //         orderId:req.body.order.id
  //     }
  // }).then(products=>console.log(products))
  console.log(req.body);
  let emailClients = [];
  let emailUser = "";

  Order.create(req.body.order).then((order) => {
    if (req.body.order.deliveryPoint) {
      order.setPuntoDeEncuentro(req.body.PuntoDeEncuentro);
    }
    if (req.user) {
      User.findByPk(req.user.id).then((user) => {
        order.setUser(user);
        emailUser = req.user.email;
        console.log('usuario', emailUser);

      });
    }
    req.body.productDataId.map((e) => {
      ProductData.findByPk(e).then((productData) => {
        productData.setOrder(order);
        let emailProducto = productData.dataValues.emailClient
        emailUser !== emailProducto
          ? emailClients.includes(emailProducto)
            ? console.log("era igual")
            : emailClients.push(emailProducto)
          : null;
        console.log('usuario', emailUser);
        console.log('clientes',emailClients);
      });
    });
    res.send(order);
  });
});

router.post("/modifyOrder", function (req, res) {
  console.log("BODY:", req.body);
  Order.findByPk(req.body.orderId).then((order) => {
    ProductData.findByPk(req.body.productDataId).then((productData) => {
      User.findByPk(req.body.userId).then((user) => {
        order.setUser(user);
        productData.setUser(user);
      });
      productData.setOrder(order);
      res.json({
        order: order,
        productData: productData,
      });
    });
  });
});

router.get("/userOrders", (req, res) => {
  Order.findAll({
    where: {
      userId: req.user.id,
    },
  }).then((orders) => {
    ProductData.findAll({
      where: {
        userId: req.user.id,
      },
    }).then((productData) => {
      res.send({
        orders: orders,
        productData: productData,
      });
    });
  });
});

router.get("/getPuntoDeEncuentro", function (req, res) {
  PuntoDeEncuentro.findAll().then((response) => res.json(response));
});

module.exports = router;
