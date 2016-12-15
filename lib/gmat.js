var child_process = require('child_process');
var Q = require('q');
var Promise = Q.Promise;

exports = {};

exports.runScript = runScript;

module.exports = exports;


function runScript() {

   var gmatConsole = './lib/gmat-dist/R2016a/bin/GmatConsole';
   var file = '../samples/Ex_HohmannTransfer.script';
   var args = [
      file
   ];

   return new Promise(function resolver(resolve, reject) {
      child_process.execFile(gmatConsole, args, function(err, stdout, stderr) {
         /*
      if (err) {
         console.error('stderr', stderr);
         throw err;
      }
      console.log('stdout', stdout);
      */

         if (err) {
            console.log('gmat complete with error');
            console.log(err);
            reject(err);
         } else {
            console.log('gmat complete successfully');
            resolve(stdout);
         }
      });
   });
}
