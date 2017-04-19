var express = require('express');

// Create our app
var app = express();

// PORT HEROKU
const PORT = process.env.PORT || 3000;

// force to enable http otherwise is not

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') { // on heroku
    res.redirect('http://' + req.hostname + req.url);
  } else { // on localhost
    next();
  }
});



app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
