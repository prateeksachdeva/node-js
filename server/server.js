var express=require('express');
var bodyParser=require('body-parser');

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
app.listen(300,()=>{
    console.log('Started on port 300');
});
