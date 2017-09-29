const mongoose=require('mongoose');
const validator=require('validator');

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
    minlength:1,
    unique:true,
    validate:{
      validator:validator.isEmail,
      message:'{VALUE} is not a valid email'
          }
    },
    password:{
      type:String,
      required:true,
      minlength:6
    },
    tokens:[{
      access:{
        type:String,
        required:true
      },
      token:{
        type:String,
        required:true
      }
    }]

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
