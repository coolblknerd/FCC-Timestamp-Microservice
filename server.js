const express = require('express'), 
      sTime = require('strftime');

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
   var time = req.params.time;
   
   // If the param is a unix time
   if(isNaN(time) === false) {
      var natural = sTime('%B %e, %Y', new Date(+time));
      
      res.send({
         'unix': new Date(+time).getTime(),
         'natural': natural
      });
      
   }
   
   // If the param is a natural time
   if(isNaN(time) === true) {
      var date = new Date(time).toString() === 'Invalid Date' ? null : new Date(time);
      
      // If the date variable is null return null, otherwise, format the date accordingly
      res.send({
         'unix': date === null ? null : new Date(date).getTime(),
         'natural': date === null ? null : sTime('%B %e, %Y', date)
      });
   }
   
   res.end();
});

app.listen(8080, function() {
   console.log("I'm listening to you on port 8080"); 
});