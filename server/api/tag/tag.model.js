'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TagSchema = new Schema({
    url: String,
    slug: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tag', TagSchema);