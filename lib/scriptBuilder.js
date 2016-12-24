'use strict';

var lineBuilder = require('./lineBuilder');

exports = {};

exports.buildScript = buildScript;
exports.buildSpacecraft = buildSpacecraft;
exports.buildHardware = buildHardware;
exports.buildMissionSequence = buildMissionSequence;

module.exports = exports;


function buildScript(simulation) {
   var lines = [];
   var builder;
   var key, i;

   // Spacecraft
   lines.push(buildSpacecraft(simulation.space.craft));

   // Hardware
   lines.push(buildHardware(simulation.space.hardware));

   // Ground

   // Force Model
 
   // Propagator
  
   // Burns
   
   // Subscribers
   
   // Mission Sequence
   lines.push(buildMissionSequence(simulation.space.craft.mission.sequence));

   return lines.join('\n');
}

// private

function buildSpacecraft(spacecraftData) {
   var lines = [];
   var builder;
   
   builder = lineBuilder.comment.segment;
   lines.push(builder('Spacecraft'));
   builder = lineBuilder.spacecraft;
   lines.push(builder(spacecraftData));

   return lines.join('\n');
}

function buildHardware(hardwareData) {
   var lines = [];
   var builder;
   var key, i;

   var hardware = hardwareData;
   var system;
   builder = lineBuilder.comment.segment;
   lines.push(builder('Hardware'));
   for (key in hardware) {
      if (hardware.hasOwnProperty(key)) {
         system = hardware[key];
         builder = lineBuilder[key];
         for (i = 0; i < system.length; i++) {
            lines.push(builder(system[i]));
         }
      }
   }

   return lines.join('\n');
}

function buildMissionSequence(sequenceData) {
   var lines = [];
   var builder;
   var key, i;

   builder = lineBuilder.comment.segement;
   lines.push(builder('Mission Sequence'));
   builder = lineBuilder.beginMissionSequence;
   lines.push(builder());
   var segments = sequenceData;
   var segment;
   for (i = 0; i < segments.length; i++) {
      segment = segments[i];
      key = segment.type;
      builder = lineBuilder[key];
      lines.push(builder(segment));
   }

   return lines.join('\n');
}
