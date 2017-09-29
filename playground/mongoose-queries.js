const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id = '59cd6c880884c83138a8ab14';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo){
//   return  console.log('Not find');
//   }
//   console.log('Todo', todo);
// });
// Todo.findById(id).then((to)=>{
//   console.log('Todos',to);
// }).catch((e)=>{
//   console.log('Error',e);
// });
if (!ObjectID.isValid(id)){
  console.log('not valid id');
}
User.findById(id).then((too)=>{
  if(!too){
  return  console.log('no email id');
  }
  console.log(JSON.stringify(too,undefined,2));
}).catch((e)=>{
  console.log('error',e);
});
