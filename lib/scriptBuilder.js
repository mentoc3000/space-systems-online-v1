'use strict';

exports = {};

exports.buildScript = buildScript;
exports.buildSpacecraft = buildSpacecraft;
exports.buildHardware = buildHardware;
exports.buildMissionSequence = buildMissionSequence;

var block = {};
block.antenna = antenna;
// block.array = array;
// block.baryCenter = baryCenter;
// block.batchEstimatorInv = batchEstimatorInv;
// block.celestialBody = celestialBody;
// block.chemicalTank = chemicalTank;
// block.chemicalThruster = chemicalThruster;
// block.coordinateSystem = coordinateSystem;
// block.contactLocator = contactLocator;
// block.differentialCorrector = differentialCorrector;
// block.electricTank = electricTank;
// block.electricThruster = electricThruster;
// block.eclipseLocator = eclipseLocator;
// block.ephemerisFile = ephemerisFile;
// block.errorModel = errorModel;
// block.fileInterface = fileInterface;
// block.finiteBurn = finiteBurn;
// block.fminconOptimizer = fminconOptimizer;
// block.formation = formation;
// block.gmatFunction = gmatFunction;
// block.groundStation = groundStation;
// block.groundTrackPlot = groundTrackPlot; // not used for SSO visualization
// block.impulsiveBurn = impulsiveBurn;
// block.liberationPoint = liberationPoint;
// block.matlabFunction = matlabFunction;
// block.nuclearPowerSystem = nuclearPowerSystem;
// block.orbitView = orbitView; // not used for SSO visualization
// block.propagator = propagator;
// block.receiver = receiver;
// block.reportFile = reportFile;
// block.simulator = simulator;
// block.snopt = snopt;
// block.solarPowerSystem = solarPowerSystem;
// block.solarSystem = solarSystem;
block.spacecraft = spacecraft;
// block.statisticsAcceptFilter = statisticsAcceptFilter;
// block.statisticsRejectFilter = statisticsRejectFilter;
// block.string = string;
// block.trackingFileSet = trackingFileSet;
// block.transmitter = transmitter;
// block.transponder = transponder;
// block.variable = variable;
// block.vf13ad = vf13ad;
// block.xyPlot = xyPlot; // not used for SSO visualization
//
// block.achieve = achieve;
// block.assignment = assignment;
// block.beginFiniteBurn = beginFiniteBurn;
block.beginMissionSequence = beginMissionSequence;
// block.beginScript = beginScript;
// block.callGmatFunction = callGmatFunction;
// block.callMatlabFunction = callMatlabFunction;
// block.callPythonFunction = callPythonFunction;
// block.clearPlot = clearPlot; // not used for SSO visualization
// block.endFiniteBurn = endFiniteBurn;
// block.findEvents = findEvents;
// block.for = forCommand;
// block.getEphemStates = getEphemStates;
// block.global = global;
// block.if = ifCommand;
// block.maneuver = maneuver;
// block.markPoint = markPoint;
// block.minimize = minimize;
// block.nonlinearConstraint = nonlinearConstraint;
// block.optimize = optimize;
// block.penUpPenDown = penUpPenDown;
block.propagate = propagate;
// block.report = report;
// block.runEstimator = runEstimator;
// block.runSimulator = runSimulator;
// block.set = setCommand;
// block.stop = stop;
// block.target = target;
// block.toggle = toggle;
// block.vary = vary;
// block.while = whileCommand;
// block.write = write;
//
block.comment = {
   segment: commentSegment,
   line: commentLine
};
exports.block = block;

module.exports = exports;


function buildScript(simulation) {
   var lines = [];
   var builder;
   var key, i;

   if (simulation) {
      if (simulation.ground) {
         // Ground

      }
      if (simulation.space){
         // Spacecraft
         lines.push(buildSpacecraft(simulation.space.craft));

         // Hardware
         lines.push(buildHardware(simulation.space.hardware));

         // Force Model

         // Propagator

         // Burns

         // Subscribers

         // Mission Sequence
         if (simulation.space.craft &&
            simulation.space.craft.mission){
               lines.push(buildMissionSequence(simulation.space.craft.mission.sequence));
         }
      }
   }

   return lines.join('\n');
}

function buildSpacecraft(spacecraftData) {
   if (!spacecraftData) return '';
   if (isEmpty(spacecraftData)) return '';
   var lines = [];
   var builder;
   
   lines.push(commentSegment('Spacecraft'));
   lines.push(spacecraft(spacecraftData));

   return lines.join('\n');
}

function buildHardware(hardwareData) {
   if (!hardwareData) return '';
   if (isEmpty(hardwareData)) return '';
   var lines = [];
   var builder;
   var key, i;

   var hardware = hardwareData;
   var system;
   lines.push(commentSegment('Hardware'));
   for (key in hardware) {
      if (hardware.hasOwnProperty(key)) {
         if (hardware[key].length > 0) {
            system = hardware[key];
            builder = block[key];
            for (i = 0; i < system.length; i++) {
               lines.push(builder(system[i]));
            }
         }
      }
   }

   return lines.join('\n');
}

function buildMissionSequence(sequenceData) {
   if (!sequenceData) return '';
   if (isEmpty(sequenceData)) return '';
   var lines = [];
   var builder;
   var key, i;

   lines.push(commentSegment('Mission Sequence'));
   lines.push(beginMissionSequence());
   var segments = sequenceData;
   var segment;
   for (i = 0; i < segments.length; i++) {
      segment = segments[i];
      key = segment.type;
      builder = block[key];
      lines.push(builder(segment));
   }

   return lines.join('\n');
}


// lines


function antenna(antennaData) {
   if (!antennaData) return '';
   if (isEmpty(antennaData)) return '';
   return 'Create Antenna ' + antennaData.name + ';';
}

function spacecraft(spacecraftData) {
   if (!spacecraftData) return '';
   if (isEmpty(spacecraftData)) return '';
   var lines = [];

   // name
   lines.push('Create Spacecraft ' + spacecraftData.name + ';');

   // epoch

   if (spacecraftData && 
      spacecraftData.mission && 
      spacecraftData.mission.initial && 
      spacecraftData.mission.initial.epoch) {
         if (spacecraftData.mission.initial.epoch.DateFormat) {
            lines.push(spacecraftData.name + '.DateFormat = ' + spacecraftData.mission.initial.epoch.DateFormat + ';');
         }

         if (spacecraftData.mission.initial.epoch.Epoch) {
            lines.push(spacecraftData.name + '.Epoch = ' + spacecraftData.mission.initial.epoch.Epoch + ';');
         }
   }

   // initial orbit
   if (spacecraftData &&
      spacecraftData.mission &&
      spacecraftData.mission.initial &&
      spacecraftData.mission.initial.orbit) {

         if (spacecraftData.mission.initial.orbit.X) {
            lines.push(spacecraftData.name + '.X = ' + spacecraftData.mission.initial.orbit.X + ';');
         }

         if (spacecraftData.mission.initial.orbit.Y) {
            lines.push(spacecraftData.name + '.Y = ' + spacecraftData.mission.initial.orbit.Y + ';');
         }

         if (spacecraftData.mission.initial.orbit.Z) {
            lines.push(spacecraftData.name + '.Z = ' + spacecraftData.mission.initial.orbit.Z + ';');
         }

         if (spacecraftData.mission.initial.orbit.VX) {
            lines.push(spacecraftData.name + '.VX = ' + spacecraftData.mission.initial.orbit.VX + ';');
         }

         if (spacecraftData.mission.initial.orbit.VY) {
            lines.push(spacecraftData.name + '.VY = ' + spacecraftData.mission.initial.orbit.VY + ';');
         }

         if (spacecraftData.mission.initial.orbit.VZ) {
            lines.push(spacecraftData.name + '.VZ = ' + spacecraftData.mission.initial.orbit.VZ + ';');
         }

         if (spacecraftData.mission.initial.orbit.SMA) {
            lines.push(spacecraftData.name + '.SMA = ' + spacecraftData.mission.initial.orbit.SMA + ';');
         }

         if (spacecraftData.mission.initial.orbit.ECC) {
            lines.push(spacecraftData.name + '.ECC = ' + spacecraftData.mission.initial.orbit.ECC + ';');
         }

         if (spacecraftData.mission.initial.orbit.INC) {
            lines.push(spacecraftData.name + '.INC = ' + spacecraftData.mission.initial.orbit.INC + ';');
         }

         if (spacecraftData.mission.initial.orbit.RAAN) {
            lines.push(spacecraftData.name + '.RAAN = ' + spacecraftData.mission.initial.orbit.RAAN + ';');
         }

         if (spacecraftData.mission.initial.orbit.AOP) {
            lines.push(spacecraftData.name + '.AOP = ' + spacecraftData.mission.initial.orbit.AOP + ';');
         }

         if (spacecraftData.mission.initial.orbit.TA) {
            lines.push(spacecraftData.name + '.TA = ' + spacecraftData.mission.initial.orbit.TA + ';');
         }

         if (spacecraftData.mission.initial.orbit.RadPer) {
            lines.push(spacecraftData.name + '.RadPer = ' + spacecraftData.mission.initial.orbit.RadPer + ';');
         }

         if (spacecraftData.mission.initial.orbit.RadApo) {
            lines.push(spacecraftData.name + '.RadApo = ' + spacecraftData.mission.initial.orbit.RadApo + ';');
         }
   }

   return lines.join('\n');

}

function beginMissionSequence() {
   return 'BeginMissionSequence;';
}

function propagate(propagateData) {
   if (!propagateData) return '';
   if (isEmpty(propagateData)) return '';
   var output = 'Propagate ';
   if (propagateData.mode) {
      output = output + propagateData.mode + ' ';
   } 

   if (propagateData.backProp) {
      output = output + 'BackProp ';
   }

   output = output + propagateData.propagatorName + '(' +
      propagateData.spacecraftName + ') ';
   if (typeof propagateData.stopCondition === 'string') {
      output = output + '{' + propagateData.stopCondition + '};';
   } else {
      output = output + '{' + propagateData.stopCondition.join(', ') + '}';
   }
   output = output + ';';

   return output;
}

function commentLine(line) {
   return '% ' + line;
}

function commentSegment(title) {
   var newline = '\n';
   var spacer = '%----------------------------------------------------';
   var line = '%------ ' + title;
   var array = [newline, spacer, line, spacer];
   return array.join('\n');
}


// helpers
function isEmpty(obj) {
   for (var prop in obj) {
      if (obj.hasOwnProperty(prop)){
         return false;
      }
   }
   return true;
}
