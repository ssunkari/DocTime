 var config = require('../../config'),
     _ = require('lodash'),
     client = require('twilio')(config('twilio:accountSid'), config('twilio:authToken'));

 module.exports = function (users, data, callback) {
     _.forEach(users, function (user) {
         if (user.receiveSms && user.smsEnabled) {
             client.messages.create({
                 to: user.phoneNumber,
                 from: config.get('twilio:senderNumber'),
                 body: data.message
             });
             callback();
         }
     });
 };