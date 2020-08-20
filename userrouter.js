
var express = require('express');
var app=express();
var router = express.Router();
var another=require("./log.js");
router
.route('/send')
.get(another.sendsomething)
.post(another.login);
module.exports = router;