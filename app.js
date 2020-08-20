var express = require("express");
//const { static } = require("express");
var app=express();

const path = require('path');
const compression=require('compression');
app.use(express.static('public'));
app.use(compression());
var router = require('./router.js');

var userroute = require('./userrouter.js');
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.sendFile('./index.html');
    
    });
    app.get('/Experience',(req,res)=>{

        res.sendFile(path.join(__dirname,'./public','experience.html'));

    });

app.use('/api/About',router);    

app.use('/api/User',userroute);



// app.use('/api/User',(req,res)=>{

//     const {name,email,message} = req.body;
//     console.log("hello");
//     console.log(name,email,message);
    

// });

//app.use('/Contact',router);




    module.exports=app;