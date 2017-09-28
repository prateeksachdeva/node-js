// const MongoClient =require('mongodb').MongoClient; and ObjectID for id OR
const {MongoClient,ObjectID}=require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to MongoDB server');
  }
console.log('connected to Mono db server');
// db.collection('Todos').deleteMany({completed:false}).then((result)=>{
//   console.log(result);
// });
// db.collection('Todos').deleteOne({text:'bro'}).then((result)=>{
//   console.log(result);
// });
db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
  console.log(result);
});
db.close();
});
