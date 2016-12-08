require('rootpath')();
var express = require("express");
var session = require('express-session');
var bodyParser = require("body-parser");
var expressJwt = require('express-jwt');
var config = require('config.json');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
   secret: config.secret,
   resave: false,
   saveUninitialized: true
}));

// use JWT auth to secure the api
app.use('/api',
   expressJwt({
      secret: config.secret
   })
   .unless({
      path: [
         '/api/users/authenticate',
         '/api/users/register'
      ]
   })
);

// routes
app.use('/login', require('./controllers/LogInController'));
app.use('/register', require('./controllers/RegisterController'));
app.use('/app', require('./controllers/AppController'));
app.use('/api/users', require('./controllers/api/UsersController'));

// make '/app' the default route
app.get('/', function(req, res){
   return res.redirect("/app");
});

var server = app.listen(app.get('port'),function(){
   // var host = server.address().address;
   var host = "::";
   var port = server.address().port;

   if (host === "::") host = 'localhost';

   console.log('Server listening at http://' + host + ':' + port);
});

// module.exports = server;
