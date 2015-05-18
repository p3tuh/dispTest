var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var clientRouter = express.Router();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/', clientRouter);

  require('./clientRoutes.js')(clientRouter);
}