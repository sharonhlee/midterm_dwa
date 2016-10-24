var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var URLSlugs=require('mongoose-url-slugs');

var gameSchema = new Schema({
    gameplay: [{ searchterm: String, hitcount: Number }],
    dateCreated: {type: Date, default: Date.now}
});

gameSchema.plugin(URLSlugs('name', {field: 'slug'}));

var Game = mongoose.model('Game', gameSchema);

// when we require this file, we get Pet model
module.exports = Game;