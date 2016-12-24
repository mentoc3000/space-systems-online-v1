'use strict';

var child_process = require('child_process');
var Q = require('q');
var Promise = Q.Promise;
var fs = require('fs');
var path = require('path');
var scriptBuilder = require('./scriptBuilder');

exports = {};

exports.runSim = runSim;
exports.runScript = runScript;

module.exports = exports;

function runSim(simulation) {
   var script = buildScript(simulation);
   return runScript(script);
}

function runScript(script) {
   return saveScript(script)
      .then(runGmat);
}

// private

var existingFileNumbers = [];

function buildScript(simulation) {
   var lines = [];
   var builder;
   var key, i;

   // Spacecraft
   builder = scriptBuilder.comment.segment;
   lines.push(builder('Spacecraft'));
   builder = scriptBuilder.spacecraft;
   lines.push(builder(simulation.space.craft));

   // Hardware
   var hardware = simulation.space.hardware;
   var system;
   builder = scriptBuilder.comment.segment;
   lines.push(builder('Hardware'));
   for (key in hardware) {
      if (hardware.hasOwnProperty(key)) {
         system = hardware[key];
         builder = scriptBuilder[key];
         for (i = 0; i < system.length; i++) {
            lines.push(builder(system[i]));
         }
      }
   }

   // Ground

   // Force Model
 
   // Propagator
  
   // Burns
   
   // Subscribers
   
   // Mission Sequence
   builder = scriptBuilder.comment.segement;
   lines.push(builder('Mission Sequence'));
   builder = scriptBuilder.beginMissionSequence;
   lines.push(builder());
   var segments = simulation.space.scraft.mission.sequence;
   var segment;
   for (i = 0; i < segments.length; i++) {
      segment = segments[i];
      key = segment.type;
      builder = scriptBuilder[key];
      lines.push(builder(segment));
   }

   return lines.join('\n');
}

function saveScript(script) {
   var filename = newFileName();

   return new Promise(function resolver(resolve, reject) {

      fs.writeFile(filename, script, function(err) {
         if (err) {
            console.log(err);
            reject(err);
         } else {
            resolve(filename);
         }
      });
   });
}

function newFileName() {
   var i;

   if (existingFileNumbers.length === 0) {
      i = 1;
   } else {
      var max = Math.max.apply(null, existingFileNumbers);
      for (i = 1; i <= max; i++) {
         if (existingFileNumbers.indexOf(i) === -1) {
            break;
         }
      }
   }

   var filename = makeFileName(i);
   return filename;
}


function makeFileName(num) {

   var dir = './scripts/';
   var base = 'sim';
   var extension = 'script';
   var filename = path.resolve(__dirname, dir +  base + num + '.' + extension);
   return filename;
}


function runGmat(filename) {


   return new Promise(function resolver(resolve, reject) {

      var command = buildCommand(filename);
      child_process.exec(command, function(err, stdout, stderr) {
         if (err) {
            console.log(err);
            reject(err);
         } else {
            resolve(stdout);
         }
         deleteFile(filename);
      });
   });

   function buildCommand(filename) {

      var gmat = path.resolve(__dirname, './gmat-dist/R2016a/bin/GmatConsole');
      var command = gmat + ' ' + filename;
      return command;
   }
}


function deleteFile(filename) {
   fs.unlink(filename,function(err) {
      if (err) {
         console.log(err);
      }
   });
}
