var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.listen(port);
console.log('now listening on port: ' + port);

require('./middleware.js')(app, express);
module.exports = app;