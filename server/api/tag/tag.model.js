'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
    name: String,
    slug: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tag', TagSchema);