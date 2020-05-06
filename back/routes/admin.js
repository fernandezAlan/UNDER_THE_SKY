const express = require("express");
const router = express.Router();

const fileUpload = require("express-fileupload");
const fs = require("fs");
const nodemailer = require("nodemailer");


const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/src/img/probuilder/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const Frame = require("../models/frame");
const Size = require("../models/size");
const Style = require("../models/style");
const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");
const Display = require("../models/display");
const ProductData = require("../models/productData");
const PuntoDeEncuentro = require("../models/puntoDeEncuentro");

router.get("/getFrame", function (req, res) {
  Frame.findAll().then(function (frames) {
    res.json(frames);
  });
});

router.get('/getFrame/:id', function (req, res) {
  Frame.findByPk(req.params.id)
    .then(data => res.json(data))
})

router.post("/newFrame", upload.single("frameImg"), function (req, res) {
  console.log(req.file);
  console.log(req.body);

  let name = req.body.frame;
  let framePrice = parseInt(req.body.framePrice);
  Frame.create({
    name,
    price: framePrice,
    imgName: req.file.originalname,
    imgType: req.file.mimetype,
    imgData: fs.readFileSync(req.file.path),
    imgPath: "/" + req.file.path,
  }).then((resolve) => {
    console.log(resolve);
    res.redirect(200, "/addproducts");
  });
});

router.delete("/deleteFrame/:frame", function (req, res) {
  Frame.findByPk(req.params.frame)
    .then(function (frame) {
      console.log("este es mi frame", frame);
      frame.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});

router.get("/getSize", function (req, res) {
  Size.findAll().then(function (sizes) {
    res.json(sizes);
  });
});

router.post("/newSize", function (req, res) {
  Size.create(req.body).then(function () {
    res.sendStatus(200);
  });
});

router.put('/editSize/:id', function (req, res) {
  const id = req.params.id
  Size.update(req.body, { where: { id } })
    .then(function (resolved) {
      console.log('se actualizaron', resolved, 'filas del modelo');
      res.sendStatus(200);
    });

})

router.delete("/deleteSize/:size", function (req, res) {
  Size.findByPk(req.params.size)
    .then(function (size) {
      size.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});


////////////FRAMES//////////////

router.put("/editFrame/:id", upload.single("styleImg"), function (req, res) {
  console.log("Ruta de edición de estilo ->", req.params.id);
  console.log("Ruta de edicion de estilo->", req.body);
  console.log("Ruta de edicion de estilo, img->", req.file);
  let name = req.body.frame ? req.body.frame.toLowerCase() : undefined;
  let price = req.body.framePrice ? req.body.framePrice.toLowerCase() : undefined;
  let imgName = req.file ? req.file.originalname : undefined;
  let imgType = req.file ? req.file.mimetype : undefined;
  let imgData = req.file ? fs.readFileSync(req.file.path) : undefined;
  let imgPath = req.file ? "/" + req.file.path : undefined;
  let id = req.params.id;
  Frame.update(
    {
      name,
      price,
      imgName,
      imgType,
      imgData,
      imgPath,
    },
    {
      where: { id },
    }
  )
    .then(function (resolved) {
      console.log('se actualizaron', resolved, 'filas del modelo');

      res.sendStatus(200);
    });
});










//////////////////////ESTILOS////////////////////////////////////

router.get("/getStyle", function (req, res) {
  Style.findAll().then(function (styleId) {
    res.json(styleId);
  });
});

router.post("/newStyle", upload.single("styleImg"), function (req, res) {
  console.log("Ruta de creación de estilo->", req.body);
  console.log("Ruta de creación de estilo, img->", req.file);
  let name = req.body.styleName.toLowerCase();
  let color = req.body.styleColor.toLowerCase();
  let tipografia = req.body.styleTipo.toLowerCase();
  let signo = req.body.styleSigno.toLowerCase();
  Style.create({
    name,
    color,
    signo,
    tipografia,
    imgName: req.file.originalname,
    imgType: req.file.mimetype,
    imgData: fs.readFileSync(req.file.path),
    imgPath: "/" + req.file.path,
  }).then(function (resolve) {
    console.log(resolve);
    res.sendStatus(200);
  });
});

router.put("/editStyle/:style", upload.single("styleImg"), function (req, res) {
  console.log("Ruta de edición de estilo ->", req.params.style);
  console.log("Ruta de edicion de estilo->", req.body);
  console.log("Ruta de edicion de estilo, img->", req.file);
  let name = req.body.styleName ? req.body.styleName.toLowerCase() : undefined;
  let color = req.body.styleColor
    ? req.body.styleColor.toLowerCase()
    : undefined;
  let tipografia = req.body.styleTipo
    ? req.body.styleTipo.toLowerCase()
    : undefined;
  let signo = req.body.styleSigno
    ? req.body.styleSigno.toLowerCase()
    : undefined;
  let imgName = req.file ? req.file.originalname : undefined;
  let imgType = req.file ? req.file.mimetype : undefined;
  let imgData = req.file ? fs.readFileSync(req.file.path) : undefined;
  let imgPath = req.file ? "/" + req.file.path : undefined;
  let id = req.params.style;
  Style.update(
    {
      name,
      color,
      tipografia,
      signo,
      imgName,
      imgType,
      imgData,
      imgPath,
    },
    {
      where: { id },
    }
  )
    .then(function (resolved) {
      console.log('se actualizaron', resolved, 'filas del modelo');

      res.sendStatus(200);
    });
});

///////estas andan

router.delete("/deleteStyle/:style", function (req, res) {
  console.log("Ruta de eliminación de estilo ->", req.params.style);
  Style.findByPk(req.params.style)
    .then(function (style) {
      style.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});

//////////////////////ORDERS////////////////////////////////////
router.get("/getOrders", function (req, res) {
  Order.findAll().then(function (orders) {
    res.json(orders);
  });
});

const changeStatusMail = (email, content) => {

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
  const mailOptions = {
    from: "undertheskydeco024@gmail.com",
    to: `${email}`,
    subject: `Lamentamos verte partir ${content}`,
    html: { path: "./mailTemplates/userDelete.html" },
  };
  console.log(email)
  console.log(content)
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


router.put("/changeStatus", function (req, res) {
  console.log("BODY.", req.body);
  Order.findByPk(req.body.orderId).then(function (order) {
    console.log(order);
    
    order.update({ status: req.body.status }).then(function (newOrder) {
      res.json(newOrder);
    });
  });
});

router.delete("/deleteOrder/:id", function (req, res) {
  console.log("params", req.params);
  Order.findByPk(req.params.id)
    .then(function (order) {
      order.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});

/////////////////USERS/////////////////////
router.get("/getUsers", function (req, res) {
  User.findAll().then(function (users) {
    res.json(users);
  });
});

router.post("/addAdmin", function (req, res) {
  console.log("entre al back");
  User.findByPk(req.body.userId).then(function (user) {
    user.update({ type: req.body.type }).then(function (newstatus) {
      console.log("type modificado back");
      res.json(newstatus);
    });
  });
});


const userDelete = (email, content) => {

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
  const mailOptions = {
    from: "undertheskydeco024@gmail.com",
    to: `${email}`,
    subject: `Lamentamos verte partir ${content}`,
    html: { path: "./mailTemplates/userDelete.html" },
  };
  console.log(email)
  console.log(content)
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


router.delete("/deleteUser/:id", function (req, res) {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      userDelete(user.email, user.firstName)
      user.destroy();
    })
    .then(res.sendStatus(204));
});



///////////PRODUCTS////////////////////////
router.get("/getAllDataProducts", function (req, res) {
  ProductData.findAll().then((allproductdata) => {
    console.log("allproductdata", allproductdata);
    res.json(allproductdata);
  });
});

router.get("/getProducts", function (req, res) {
  Product.findAll().then(function (products) {
    res.json(products);
  });
});

router.delete("/deleteProduct", function (req, res) {
  Product.findByPk(req.body.productId)
    .then(function (product) {
      product.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});

// /////////DISPLAY//////////////////////
// router.get("/getDisplay", function (req, res) {
//   Display.findAll().then(function (display) {
//     res.json(display);
//   });
// });
// router.post("/newDisplay", function (req, res) {
//   Display.create(req.body).then(function () {
//     res.sendStatus(200);
//   });
// });

// router.delete("/deleteDisplay", function (req, res) {

//     Display.findByPk(req.body.displayId)
//         .then(function (style) {
//             style.destroy()
//         })
//         .then(function () {
//             res.sendStatus(200)
//         })
// })
///////////////// PUNTOS DE ENCUENTRO /////////////
router.post("/newPunto", function (req, res) {
  console.log("entre papaaaaaaa");
  PuntoDeEncuentro.create(req.body).then(function () {
    res.send("punto creado papa");
  });
});

router.post("/deletePunto", function (req, res) {
  console.log("esty en la ruta", req.body);
  const id = req.body.id;
  PuntoDeEncuentro.findByPk(id)
    .then((punto) => {
      punto.destroy();
    })
    .then(res.sendStatus(204));
});

module.exports = router;
