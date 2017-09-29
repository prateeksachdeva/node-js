var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./model/todo');
var {user}=require('./model/user');
var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
var todos=new Todo({
  text:req.body.text
});
todos.save().then((result)=>{
  res.send(result);
} ,(e)=>{
  res.status(400).send(e);
});
});
app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
    res.send({todos});
},(e)=>{
  res.status(400).send(e);
}) ;
});
app.get('/todos/:id',(req,res)=>{
var id =req.params.id;
if (!ObjectID.isValid(id)){
  return res.status(404).send();
}
Todo.findById(id).then((resu)=>{
  if (!resu){
  return  res.status(404).send();
  }
  res.send({resu});
}).catch((e)=>{
  res.status(400).send();
});
});
app.listen(300,()=>{
    console.log('Started on port 300');
});
