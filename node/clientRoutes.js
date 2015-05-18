var twilio = require('./clientController.js');
var Q = require('q');

module.exports = function(app) {
  app.get('/', function(req, res) {
    Q.fcall(twilio.availablePhoneNumbers('+16196210102'))
      .then(function(purchasedNumber) {
        console.log('Yeay - I am proud owner of ' + purchasedNumber);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}