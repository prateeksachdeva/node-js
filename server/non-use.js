var {mongoose}=require('./db/mongoose');

var Todos=mongoose.model('Todos',{
  text:{
   type:String,
   required:true,
   minlength:1,
   trim:true
 },
 completed:{
   type:Boolean,
   default:true
 },
completedAt:{
  type:Number,
  default:null
}
});
// var newTo=new Todos({
//   completedAt:223
// });
var newTo=new Todos({

  text:'asdjasxsj'

});
var Users=mongoose.model('Users',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});
var newTo=new Users({
  email:'jakdjakl'
});
newTo.save().then((doc)=>{
  console.log('sadam',doc);
},(e)=>{
  console.log('Unable to save');
});
