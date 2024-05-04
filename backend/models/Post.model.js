const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    releaseYear: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    system: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    imagePath: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    content: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', PostSchema, 'Post');

module.exports = Post;