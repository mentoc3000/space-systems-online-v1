// var Q = require('q');
// var Promise = Q.Promise;
var gmat = require('../lib/gmat');

var service = {};

service.runScript = runScript;

module.exports = service;

function runScript(input) {

   return gmat.runScript(input);

}
