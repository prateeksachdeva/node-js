var mongoose=require('mongoose');

// var newTo=new Todos({
//   completedAt:223
// });
// var newTo=new Todos({
//
//   text:'asdjasxsj'
//
// });
var User=mongoose.model('Users',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});
// var newTo=new User({
//   email:'jakdjakl'
// });
// newTo.save().then((doc)=>{
//   console.log('sadam',doc);
// },(e)=>{
//   console.log('Unable to save');
// });
module.exports={User};
