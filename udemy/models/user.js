// const getDb = require('../util/database').getDb ;
// const mongodb = require('mongodb') ;
// const ObjectId = mongodb.ObjectId ;

// class User {
//   constructor(username , email) {
//     this.username = username ,
//     this.email = email 
//   }
//   save() {
//     const db = getDb() ;
//     return db.collection('Users').insertOne('this') 
//     .then(result=>{
//       console.log("created user") 
//     })
//     .catch(err=>{console.log(err)})
//   }
//   static findById(userId) {
//     const db = getDb() ;
//     return getDb.collection('users').findOne({_id : new ObjectId(userId)})
//     .then(result=>console.log("success"))
//     .catch(err=>{console.log(err)})
//   }
// }

const mongoose = require('mongoose') ;
const { schema } = require('./product');
const Schema = mongoose.Schema ;
const userSchema = new Schema({
name : {
  type : String ,
  required : true
} ,
email : {
  type : String ,
  required : true
} ,
cart : {
  items : [{productId : { type : Schema.Types.ObjectId ,ref: 'Product' , required : true
  } , quantity : {type : Number , required : true}}]
}

})



module.exports = mongoose.model('User', userSchema);
