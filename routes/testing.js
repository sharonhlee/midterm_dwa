var express = require('express');
var router = express.Router();

// var Game=require('../models/game');

router.get('/',function(req,res){
	res.render('gameplay');
});

module.exports=router;