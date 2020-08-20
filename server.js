
const app=require('./app.js');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});
const port=3000;


app.listen(port,function(){

console.log("Conected to server")


})