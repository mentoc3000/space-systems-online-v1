'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var gmat = require('../../lib/gmat');

describe('GMAT module tests',function() {
   var script, output, expectedOutput, filename;

   describe('runScript',function() {

      var scripts = [
         'Ex_HohmannTransfer',
         'Ex_MarsBPlane',
         'Ex_GEOTransfer'
      ];

      scripts.forEach(testScript);

      function testScript(filename) {
         it('solve the ' + filename + ' sample', function(){
            script = readScript(filename);
            expectedOutput = readOutput(filename);
            gmat.runScript(script)
               .then(function(output){
                  expect(output).to.equal(expectedOutput);
               });
         });
      }

      function readScript(filename) {
         var dir = path.join(__dirname,'../../lib/gmat-dist/R2016a/samples/');
         var filepath = dir + filename + ".script";
         return fs.readFileSync(filepath);
      }
   });

   describe('runSim', function() {

      it('runs basic propagation', function() {
         var simulation = {
            
         };
      });
   });

   function readOutput(filename) {
      var dir = path.join(__dirname,'script-output/');
      var filepath = dir + filename + '.output';
      return fs.readFileSync(filepath);
   }
});
