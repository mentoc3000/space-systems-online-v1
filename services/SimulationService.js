// var Q = require('q');
// var Promise = Q.Promise;
var gmat = require('../lib/gmat');

var service = {};

service.reverse = reverse;

module.exports = service;

function reverse(input) {
   /*
   var splitString = input.split('');
   var reverseArray = splitString.reverse();
   var joinArray = reverseArray.join('');
   return new Promise(function resolver(resolve, reject) {
      resolve(joinArray);
   });
   */

   return gmat.runScript();
}
