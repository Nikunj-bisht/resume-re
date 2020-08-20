const express = require('express');
const app = express();
const path = require('path');
//const { router } = require('./app');


const router = express.Router();

// router.use('/',(req,res)=>{ 
//     res.render(path.join(__dirname,'./public','index.html'));
// });

router
.route('/contact')
.get((req,res)=>{
    console.log("ran");
    res.sendFile(path.join(__dirname,'./public','contactact.html'));
})


module.exports=router;