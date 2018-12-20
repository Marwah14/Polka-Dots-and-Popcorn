var express = require('express');
var router = express.Router();

var post = require('../models/Post');
var topic = require('../models/Topic');

router.get('/', post.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:post_id',  post.find, renderShow);
router.post('/', topic.create, redirectShow);
router.put('/:id', post.update, redirectShow);
router.delete('/:post_id', post.delete, redirectIndex);
router.post('/new', post.create, redirectShow2);

function redirectShow2(req, res) {
  res.redirect(`/topics/${req.topicId}/posts`);
}


function renderIndex(req, res){

  console.log(res.locals)
    var mustacheVariables = {
        post: res.locals.post
    }
    res.render('./posts/index', mustacheVariables);
}

function renderNew(req, res) {
  res.render('./posts/new' , { id : req.topicId});
}


function renderShow(req, res) {
  console.log(res.locals.post)
    var mustacheVariables = {
      topicsId: req.topicId,
      post: res.locals.post

    }
    res.render('./posts/show', mustacheVariables);
  }

  function redirectShow(req, res) {
    res.redirect(`/topic/${res.locals.Id}`);
  }

  function redirectIndex(req,res){
    res.redirect(`/topics/${req.params.post_id}/posts`);
  }
  function redirectShow(req, res) {
    res.redirect(`/topics/${req.params.post_id}/posts`);
  }
  
module.exports = router;
