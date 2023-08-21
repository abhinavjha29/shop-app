const path = require('path');
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const errorController = require('./controllers/error');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user') ;

// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
 const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   // User.findById(1)
//   //   .then(user => {
//   //     req.user = user;
//   //     next();
//   //   })
//   //   .catch(err => console.log(err));
//   next() ;
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
let dburl =process.env.DBURL ;
console.log(dburl)
mongoose.connect(dburl).then(result=>{
  app.listen(4000);
  console.log("connected") ;
}).catch(err=>{
  console.log(err) ;
})