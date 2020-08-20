const path = require("path");

const sendmail = require('./email.js');

exports.login = async(req,res,next)=>{

        const {name,email,message} = req.body;
        // console.log("hello");
        // console.log(name,email,message);
        
 await sendmail({
     name:name,
     email:email,
     message:message});

        res.status(200).json({
            status:"success"
        })
}

exports.sendsomething = async(req,res,next)=>{

res.sendFile(path.join(__dirname,'./public','profile.html'));


}