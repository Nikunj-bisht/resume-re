const nodemailer = require('nodemailer');

try{



const sendm =async options=>{


const transporter = nodemailer.createTransport({
    service:'gmail',
    port:3000,
    secure:false,
    auth:{
        user:process.env.Email_username,
        pass:process.env.Email_password
    },
    tls:{
        rejectUnauthorized:false
    }
});

var mailDetails = {
    from:process.env.Email_name,
    to:options.email,
    subject:"Welcome ".concat(options.name),
    text:"Nikunj received your mail Thankyou"
};

await transporter.sendMail(mailDetails);


};
module.exports = sendm;
}
catch(err){
console.log(err);
}
