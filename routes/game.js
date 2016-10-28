var express = require('express');
var router = express.Router();

var Game=require('../models/gameplay');

router.get('/',function(req,res){
	res.render('search-terms');
});


router.post('/',function(req,res){
	var game=new Game({
		gameplay: req.body.gameplay
	});

	game.save(function(err,data){
		if (err){
			console.log('error');
		}
		return res.redirect(303,'terms/game')
	});
});


module.exports=router;