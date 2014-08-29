'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LinkSchema = new Schema({
    _id: Number,
    url: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Link', LinkSchema);