const express = require('express');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Controller
var indexController = function(req, res){
   res.render('index.html');
};

// Route
app.get('/', indexController);

app.get('/:time', function(req, res){
   var params = req.params;
   
   if(typeof params.time == 'string') {
      console.log(params);
   }
   
   res.end();
});

app.listen(8080, function() {
   console.log("I'm listening to you on port 8080"); 
});