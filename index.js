var express         = require('express');
var mustache        = require('mustache-express');
var port            = 3000;
var logger          = require('morgan'); 
var bodyParser      = require('body-parser');  
var methodOverride  = require('method-override');

var topicController = require('./controllers/topic_controller');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(methodOverride('_method'));


// app.use('/posts', postController);
app.use('/topics', topicController);

app.get('/', function(req, res){
    res.render('./index');
  })
  
  
  app.listen(port, function(){
    console.log('its working');
  })