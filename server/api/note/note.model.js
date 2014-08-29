'use strict';
var mongoose, Schema, Link, Tag;
mongoose = require('mongoose'), Schema = mongoose.Schema,
    Link = require('../link/link.model'), Tag = require('../tag/tag.model');

var NoteSchema = new Schema({
    _id: Number,
    description: String,
    create_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
    links: [
        {type: Schema.Types.ObjectId, ref: Link}
    ],
    tags: [
        {type: Schema.Types.ObjectId, ref: Tag}
    ]
});

module.exports = mongoose.model('Note', NoteSchema);