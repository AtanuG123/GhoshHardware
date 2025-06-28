const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bcryptjs = require("bcryptjs");



const dotenv = require('dotenv');
dotenv.config();

const UserModel = require("./model/Usermodel.jsx");
const ProductModel = require("./model/Productmodel.jsx");



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.VITE_MONGO_DB_KEY);


app.post('/login', (req, res) => {
  const { Email, Password } = req.body;
  UserModel.findOne({ Email: Email })
    .then(async user => {
      if (user) {
        if (await bcryptjs.compare(Password, user.Password)) {
          res.json(user);
        }
        else {
          res.json("false");
        }
      }
      else {
        res.json("false");
      }
    })
})

 
app.post("/register", async(req, res) => {
  let { Name, Email, Phone, Address, Password} = req.body.formData;
  let isregister = "";
  isregister = await UserModel.findOne({ Email: Email })
  if (isregister !== null) {
    res.json(false);
  }

  
  
  else {
    const salt = await bcryptjs.genSalt();
    let Passwordhashed = await bcryptjs.hash(Password, salt);
    Password = Passwordhashed.toString();
  UserModel.create({Name, Email, Phone, Address, Password})
  .then((result) =>res.json(result));
  }
});




app.post('/productupload', (req, res) => {
  ProductModel.create(req.body.newProduct)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.post('/product/', (req, res) => {
  const { id } = req.body;
  ProductModel.findOne({ id: id })
    .then(product => res.json(product))
    .catch(err => res.json(err))
})


app.get('/products', (req, res) => {
  ProductModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
})


app.listen(process.env.VITE_BACKEND_PORT || 3002, () => {
  console.log("success");
});
