const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const ProductData = require("../models/productData");
const PuntoDeEncuentro = require("../models/puntoDeEncuentro");




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

/*
        NOTAS IMPORTANTES de addOrder:

         en req.body.productDataId debe recibir un arreglo con los ids de los productos.
         en req.body.order solo hay un objeto con la data de la orden
         (solo se crea una orden para todos productos que llegen en el body)
         setearle el usuario a la orden es opcional(se puede comprar sin estar registrado)
         req.body.order.deliveryPoint es un booleano que especifica si el punto de entrega existe

         Estructura de addOrder y preparación de datos para nodemailer.
         Utiliza el metedo promise.all con un array de 2 promesas, la primera hace un query 
         de admins para enviar un email y la segunda crea la orden como tal. despues setea las 
         variables que son parametros para la funcion de mail de nodemailer 
*/


const orderEmail = (emailArr, orden) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "undertheskydeco024@gmail.com",
      pass: "Bajoelcielo1-",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  emailAdmins.map((adminEmail)=>{
    const mailOrderAdmin = {
      from: "undertheskydeco024@gmail.com",
      to: `${adminEmail}`,
      subject: `Nueva compra, orden ${orderInfo.id}`,
      // text: `Felicidades ${content}! Ya tenés una cuenta de UnderTheSky!!`,
      html:  
        '<h1>'
        
       ,
    };





  })
  


  
  transporter.sendMail(mailOrderAdmin, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


router.post("/addOrder", function (req, res) {
console.log("REQ.BODY:", req.body)
  let emailAdmins = [];
  let userOrder = {
    firstName:'',
    lastName:'',
    email:''
  };
  let emailUser = "Usuario invitado";
  let emailClients = [];
  let productsInOrder = [];
  let orderInfo = {};
  let pde = {};
  let entrega = {};
  let total = 0;
  let productDataIdArr = req.body.productDataId;
  if (req.body.user !== 'invitado') {
    emailUser = req.body.user.email;
    emailClients.push(emailUser);
    console.log(emailUser);
  }
  console.log('body', req.body);
  
  Promise.all([

    User.findAll({ where: { type: "admin" } }, { raw: true }).then((result) => {
      result.map((user) => {
        let emailUserAdmin = user.dataValues.email;
        emailAdmins.includes(emailUserAdmin)
          ? console.log("era igual")
          : emailAdmins.push(emailUserAdmin);
      });
      return emailAdmins;
    }),
    req.body.user.user === {}
    ?  User.findByPk(req.body.user.id).then((user) => {
      console.log('UUARIOOOOOOO', user);
      
        userOrder = {
          firstName:user.dataValues.firstName,
          lastName:user.dataValues.lastName,
          email:user.dataValues.email
        }
        return userOrder
      })
    : null,

    req.body.productDataId.map((e) => {
      ProductData.findByPk(e).then((productData) => {
        productsInOrder.push(productData.dataValues);
      });
      return productsInOrder
    }),
    

    Order.create(req.body.order)
      .then((order) => {
        req.body.order.deliveryPoint
          ? order.setPuntoDeEncuentro(req.body.PuntoDeEncuentro)
          : (entrega = {
              address: req.body.order.address,
              city: req.body.order.city,
              country: req.body.order.country,
              state: req.body.order.state,
              postCode: req.body.order.postCode,
            }),

        
          req.body.user !== 'invitado'
          ?  User.findByPk(req.body.user.id).then((user) => {
              order.setUser(user);
            })
          : null;

        req.body.productDataId.map((e) => {
          ProductData.findByPk(e).then((productData) => {
            productData.setOrder(order);
          });
          
        })
        orderInfo = {
          status: order.dataValues.status,
          transactionNumber: order.dataValues.transactionNumber,
          id: order.dataValues.id,
          deliveryPoint: order.dataValues.deliveryPoint,
          updatedAt: order.dataValues.updatedAt,
          createdAt: order.dataValues.createdAt,
        };
        return order.dataValues;
      })
      .then((order) => console.log(order)),

    req.body.order.deliveryPoint
      ? PuntoDeEncuentro.findByPk(req.body.PuntoDeEncuentro).then((punto) => {
          pde = punto.dataValues;
          return pde;
        })
      : null,
    Promise.all(
      productDataIdArr.map((e) => {
        ProductData.findByPk(e).then((producto) => {
          let emailProducto = producto.dataValues.emailClient;
          emailUser !== emailProducto
            ? emailClients.includes(emailProducto)
              ? console.log("era igual")
              : emailClients.push(emailProducto)
            : null;
        });
        return emailClients;
      })
    ),
  ]).then((data) => {
    // console.log("resultado de promiseall", data);
    console.log("email de admins", emailAdmins);
    console.log("email user", emailUser);
    console.log('este es el usuario', userOrder);
    console.log("email clients", emailClients);
    console.log("products in order", productsInOrder);
    console.log("orderinfo", orderInfo);
    console.log("punto de encuentro", pde);
    console.log("direccion de entrega", entrega);

    res.send(orderInfo);
  });
});




module.exports = router;
