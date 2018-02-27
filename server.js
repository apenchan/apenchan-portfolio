var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/projects', function(req, res){
  res.sendFile(__dirname + '/public/projects.html');
})

app.listen(port);
console.log('=============================');
console.log('Server running on the new portfolio ' + port);
console.log('============================='); 