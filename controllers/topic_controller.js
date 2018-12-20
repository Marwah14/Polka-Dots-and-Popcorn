var express = require('express');
var router = express.Router();
var postController = require('../controllers/post_controller');
var topic = require('../models/Topic');
var post = require('../models/Post');

router.get('/', topic.getAll, renderIndex);


// router.get('/post', renderNew);      
// router.get('/:id/posts', post.getAll ,renderShow);

router.use('/:id/posts', function(req, res, next) {
    req.topicId = req.params.id;
    next();
}, postController);





// function renderShow(req, res){
//     var mustacheVariables = {
//         post: res.locals.post
//     }
//     res.render('./posts/index',mustacheVariables)
// }




function renderIndex(req, res){
    var mustacheVariables =  res.locals.topic;

    res.render('./topics/index', mustacheVariables);
}


   

module.exports = router;