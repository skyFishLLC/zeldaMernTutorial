const router = require('express').Router();
let Post = require('../models/Post.model');

//get all posts
router.route('/').get((req, res) => {
    Post.find()
        .then(Post => res.json(Post))
        .catch(err => res.status(400).json('Error: ' + err))
});

//get single post by id
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(Post => res.json(Post))
        .catch(err => res.status(400).json('Error: ' + err))
});

//delete a post by id
router.route('/:id').delete(async (req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted successfully'})
    }catch(error){
        console.error("Error deleteing Post: ", error);
        res.status(500).json({error: 'Internal server error'})
    }
});

//add Post
router.route('/add').post((req, res) => {
    const { title, releaseYear, system, imagePath, content } = req.body;
    const newPost = new Post({title, releaseYear, system, imagePath, content });

    newPost.save()
        .then(() => res.json('Post added successfully'))
        .catch(err => res.status(400).json('Error: ', err))
});

module.exports = router;