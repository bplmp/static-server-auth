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
  var port = process.env.PORT || 3000;
  console.log('Serving on ' + port);
});

app.use(stormpath.loginRequired, express.static(__dirname + '/private'));
