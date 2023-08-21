
const mongodb = require('mongodb') ;
const MongoClient = mongodb.MongoClient ;
let _db ;
const mongoConnect = (callback)=>{
  MongoClient.connect('mongodb+srv://iamuser:QN1iigEZF6JCqiTJ@cluster0.rnfff0x.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client =>{
console.log("connected") ;
_db = client.db()
callback() ;
  })
  .catch(err=>{
    console.log(err) ;
  })
}
const getDb = () =>{
  if(_db) {
    return _db
  }
  throw "no database found" ;
}
exports.mongoConnect = mongoConnect ;
exports.getDb = getDb ;