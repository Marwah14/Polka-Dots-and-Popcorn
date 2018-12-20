var db = require('../db/dbconfig');
var topic = {};



topic.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM topic;",[req.params.id])
    .then(function(result){
        res.locals.topic = result;
        console.log(result)
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

topic.find = function(req, res, next){
    db.one("SELECT * FROM topic WHERE id= $1;", [req.params.id])
    .then(function(result){
        res.locals.topic = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
  
topic.create = function(req, res, next) {
    db.one("INSERT INTO topic(name) VALUES($1) RETURNING id;", [req.body.name])
      .then(function(result){
        res.locals.post_id = result.id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

module.exports = topic;