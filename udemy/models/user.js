const getDb = require('../util/database').getDb ;
const mongodb = require('mongodb') ;
const ObjectId = mongodb.ObjectId ;

class User {
  constructor(username , email) {
    this.username = username ,
    this.email = email 
  }
  save() {
    const db = getDb() ;
    return db.collection('Users').insertOne('this') 
    .then(result=>{
      console.log("created user") 
    })
    .catch(err=>{console.log(err)})
  }
  static findById(userId) {
    const db = getDb() ;
    return getDb.collection('users').findOne({_id : new ObjectId(userId)})
    .then(result=>console.log("success"))
    .catch(err=>{console.log(err)})
  }
}

module.exports = User;
