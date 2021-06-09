const Style = require("./models/style");
const Size = require("./models/size");
const Frame = require("./models/frame");
const DataProduct = require("./models/productData");
const Product = require("./models/product");
const User = require("./models/user");
const faker = require("faker");
const Orders = require("./models/order");

let dataUser = {};
let dataOrders = {};
let dataProduct = {};

const productData = [];
const ordersData = [];
const usersData = [];

const sizes = [
  {
    name: "13x18",
    price: 200,
  },
  {
    name: "30x40",
    price: 300,
  },
  {
    name: "50x70",
    price: 400,
  },
];

for (let i = 0; i < 10; i++) {
  dataUser = {
    type: "normal",
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: "123",
  };
  usersData.push(dataUser);
}

Size.bulkCreate(sizes, { validate: true }).then((res) => {
  console.log("PrimerBulk", res);
});

User.bulkCreate(usersData, { validate: true }).then((res) => {
  console.log("SegundoBulk", res);
});

User.create({
  type: "admin",
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: "alan@alan.com",
  password: "123",
}).then(() => {
  console.log("user admin created");
});

User.create({
  type: "admin",
  firstName: "rafael",
  lastName: "romero",
  email: "ra@ro.com",
  password: "1",
}).then(() => {
  console.log("user admin created");
});
