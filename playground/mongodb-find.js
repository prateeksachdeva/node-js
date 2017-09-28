// const MongoClient =require('mongodb').MongoClient; and ObjectID for id OR
const {MongoClient,ObjectID}=require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to MongoDB server');
  }
console.log('connected to Mono db server');
// db.collection('Todos').find({
//   _id:new ObjectID('59ccff81eb2a4fd0aa788679') //thats the way of finding id
// }).toArray().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
// });
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Count:${count}`) ;
// });
db.collection('Users').find({name:'prateek'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));

},(err)=>{
  console.log('not done');
});
db.close();
});
