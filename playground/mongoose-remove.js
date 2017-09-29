const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');
//
// Todo.remove({}).then((result)=>{ all deleted
//   console.log('deleted',result);
// });
// Todo.findOneAndRemove({
//   completed:true
// }).then((result)=>{
//   console.log(result);
// });
Todo.findByIdAndRemove('59ce3418d21527d22885e445').then((res)=>{
  console.log(res);
});
