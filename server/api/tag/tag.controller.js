'use strict';

var _ = require('lodash');
var Tag = require('./tag.model');

function slug(string, callback) {
    var result = string.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text

    return callback(result);
}
// Get list of tags
exports.index = function (req, res) {
    Tag.find(function (err, tags) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, tags);
    });
};

// Get a single tag
exports.show = function (req, res) {
    Tag.findById(req.params.id, function (err, tag) {
        if (err) {
            return handleError(res, err);
        }
        if (!tag) {
            return res.send(404);
        }
        return res.json(tag);
    });
};

// Creates a new tag in the DB.
exports.create = function (req, res) {
    console.log(req.body);
    var tag = undefined;
    if (!_.isUndefined(req.body.url)) {
        slug(req.body.url, function (data) {
            tag = {
                url: req.body.url,
                slug: data
            }
            Tag.create(tag, function (err, tag) {
                if (err) {
                    return handleError(res, err);
                }
                return res.json(201, tag);
            });
        });
    } else {
        return handleError(res, "Provide a link");
    }
};

// Updates an existing tag in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Tag.findById(req.params.id, function (err, tag) {
        if (err) {
            return handleError(res, err);
        }
        if (!tag) {
            return res.send(404);
        }
        var updated = _.merge(tag, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, tag);
        });
    });
};

// Deletes a tag from the DB.
exports.destroy = function (req, res) {
    Tag.findById(req.params.id, function (err, tag) {
        if (err) {
            return handleError(res, err);
        }
        if (!tag) {
            return res.send(404);
        }
        tag.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}