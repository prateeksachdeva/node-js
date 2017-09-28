// const MongoClient =require('mongodb').MongoClient; and ObjectID for id OR
const {MongoClient,ObjectID}=require('mongodb');
// obejct distructoring by new es6
 //var user={name:'sadbah',age};
 // var {name}=user;
 // console.log(name);//sabhah will print



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to MongoDB server');
  }
console.log('connected to Mono db server');
// db.collection('Todos').insertOne({
//   text:'sjhdjash',
//   completed:false
// },(err,result)=>{
//   if (err){
//     return console.log('Unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
  name:'prateek',
  age :24,
  location:'India'
},(err,result)=>{
  if(err){
    return console.log('Unable to insert one');
  }
  console.log(JSON.stringify(result.ops,undefined,2));
  //result.ops[0]._id.getTimestamp() or result.ops[0]._id
});
db.close();
});
