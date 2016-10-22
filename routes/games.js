var express = require('express');
var router = express.Router();

// var Game=require('../models/game');

router.get('/',function(req,res){
	res.render('search-terms');
});

module.exports=router;