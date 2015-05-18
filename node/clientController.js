var accountSid = 'account id';
var authToken = 'auth token';
var twilio = require('twilio')(accountSid, authToken);
var Q = require('q');

module.exports = {
  availablePhoneNumbers: function(number) {
      //slice out just the area code
    var options = {
      areaCode: number.substring(2, 5)
    };
        //gets all the available numbers with the area code
    twilio.availablePhoneNumbers('US').local.get(options, function(err, numbers) {  
          //first avaible number from the list
        var firstAvailable = numbers.available_phone_numbers[0].phone_number;
          //adds the first number to the account
        twilio.incomingPhoneNumbers.create({
          phoneNumber: firstAvailable
        }, function(err, purchasedNumber) {
          console.log(purchasedNumber.sid);
        });
    });
  }

};