var db = require('../db/dbconfig');

var post = {};


post.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM post where topic_id=$1;",
    [req.topicId])
      .then(function(result){
        res.locals.post = result;
        next()
      })
      .catch(function(error){
        console.log(error);
        next()
      })
  }

  


  post.find = function (req, res, next) {
    db.manyOrNone("SELECT * FROM post WHERE id=$1;", [req.params.post_id])
      .then(function (result) {
        res.locals.post = result;

        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  post.create = function(req, res, next) {

    console.log("creating posts " , req.body )
    db.one("INSERT INTO post(subject, content, topic_id) VALUES($1, $2, $3) RETURNING id;", [req.body.subject, req.body.content, req.topicId])
      .then(function(result){
        res.locals.post_id = result.id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  post.update = function (req, res, next) {
    db.one('UPDATE post SET subject=$1, content=$2, topic_id=$3 WHERE id=$4 RETURNING id;'
          [req.body.subject, req.body.content, req.body.topic_id, req.params.id])
      .then(function (result) {
        res.locals.postId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

 
    post.delete = function (req, res, next) {
      db.none('DELETE FROM post WHERE id=$1;', [req.params.post_id])
        .then(function () {
          next();
        })
        .catch(function (error) {
          console.log(error);
          next();
        })
    }
    
  module.exports = post;