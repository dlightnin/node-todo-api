var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var express = require('express');
var bodyParser=require('body-parser');

var app=express();
//
// var newTodo = new Todo({text:'cook dinner BOI'});
//
// newTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc));
// },(e)=>{
//   console.log('unable to save todo',e);
// });
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo ({text:req.body.text});
  todo.save().then((doc)=>{
    console.log(doc);
    res.send(doc);
  },(e)=>{
    console.log(e);
    res.status(400).send(e);


  });
});
 app.listen(3000,()=>{
  console.log('started on port 3000');
});
