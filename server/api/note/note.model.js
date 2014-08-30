'use strict';
var mongoose, Schema, Link, Tag;
mongoose = require('mongoose'), Schema = mongoose.Schema;

var NoteSchema = new Schema({
    description: String,
    create_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
    links: [
        {type: Schema.Types.ObjectId, ref: 'Link'}
    ],
    tags: [
        {type: Schema.Types.ObjectId, ref: 'Tag'}
    ]
});

module.exports = mongoose.model('Note', NoteSchema);