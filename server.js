var express = require("express");
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, 'app')));
app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
   //res.send('Hello World!');
   res.sendFile('./public/index.html');
});

app.listen(app.get('port'),function(){
   console.log('Server running at http://localhost:' + app.get('port'));
});
