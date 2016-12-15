var child_process = require('child_process');

exports = {};

exports.runScript = runScript;

module.exports = exports;


function runScript(callback) {

   var gmatConsole = './gmat-dist/R2016a/bin/GmatConsole';
   var file = '../samples/Ex_HohmannTransfer.script';
   var args = [
      file
   ];

   child_process.execFile(gmatConsole, args, function(err, stdout, stderr) {
      if (err) {
         console.error('stderr', stderr);
         throw err;
      }
      console.log('stdout', stdout);
      callback(err,stdout,stderr);
   });
}
