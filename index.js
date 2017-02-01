var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, {
    website: true,
    web: {
      register: {
        enabled: false
      }
    }
  })
);

app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 3000);
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', stormpath.loginRequired, function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});
