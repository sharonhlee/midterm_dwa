var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var URLSlugs=require('mongoose-url-slugs');

var gameSchema = new Schema({
    name: {type: String, required: true},
    score: Number,
    gameplay: [
    	{
    		items: [key: String, hitCount: Number],
    		winnerIndex: {type: Number, min:0, max:1}
    	}
    ],
    dateCreated: {type:date, default: Date.now},
    save: Boolean
});

gameSchema.plugin(URLSlugs('name', {field: 'slug'}));

var Game = mongoose.model('Game', gameSchema);

// when we require this file, we get Pet model
module.exports = Game;