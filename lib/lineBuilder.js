'use strict';

exports = {};

exports.antenna = antenna;
// exports.array = array;
// exports.baryCenter = baryCenter;
// exports.batchEstimatorInv = batchEstimatorInv;
// exports.celestialBody = celestialBody;
// exports.chemicalTank = chemicalTank;
// exports.chemicalThruster = chemicalThruster;
// exports.coordinateSystem = coordinateSystem;
// exports.contactLocator = contactLocator;
// exports.differentialCorrector = differentialCorrector;
// exports.electricTank = electricTank;
// exports.electricThruster = electricThruster;
// exports.eclipseLocator = eclipseLocator;
// exports.ephemerisFile = ephemerisFile;
// exports.errorModel = errorModel;
// exports.fileInterface = fileInterface;
// exports.finiteBurn = finiteBurn;
// exports.fminconOptimizer = fminconOptimizer;
// exports.formation = formation;
// exports.gmatFunction = gmatFunction;
// exports.groundStation = groundStation;
// exports.groundTrackPlot = groundTrackPlot; // not used for SSO visualization
// exports.impulsiveBurn = impulsiveBurn;
// exports.liberationPoint = liberationPoint;
// exports.matlabFunction = matlabFunction;
// exports.nuclearPowerSystem = nuclearPowerSystem;
// exports.orbitView = orbitView; // not used for SSO visualization
// exports.propagator = propagator;
// exports.receiver = receiver;
// exports.reportFile = reportFile;
// exports.simulator = simulator;
// exports.snopt = snopt;
// exports.solarPowerSystem = solarPowerSystem;
// exports.solarSystem = solarSystem;
exports.spacecraft = spacecraft;
// exports.statisticsAcceptFilter = statisticsAcceptFilter;
// exports.statisticsRejectFilter = statisticsRejectFilter;
// exports.string = string;
// exports.trackingFileSet = trackingFileSet;
// exports.transmitter = transmitter;
// exports.transponder = transponder;
// exports.variable = variable;
// exports.vf13ad = vf13ad;
// exports.xyPlot = xyPlot; // not used for SSO visualization
//
// exports.achieve = achieve;
// exports.assignment = assignment;
// exports.beginFiniteBurn = beginFiniteBurn;
exports.beginMissionSequence = beginMissionSequence;
// exports.beginScript = beginScript;
// exports.callGmatFunction = callGmatFunction;
// exports.callMatlabFunction = callMatlabFunction;
// exports.callPythonFunction = callPythonFunction;
// exports.clearPlot = clearPlot; // not used for SSO visualization
// exports.endFiniteBurn = endFiniteBurn;
// exports.findEvents = findEvents;
// exports.for = forCommand;
// exports.getEphemStates = getEphemStates;
// exports.global = global;
// exports.if = ifCommand;
// exports.maneuver = maneuver;
// exports.markPoint = markPoint;
// exports.minimize = minimize;
// exports.nonlinearConstraint = nonlinearConstraint;
// exports.optimize = optimize;
// exports.penUpPenDown = penUpPenDown;
exports.propagate = propagate;
// exports.report = report;
// exports.runEstimator = runEstimator;
// exports.runSimulator = runSimulator;
// exports.set = setCommand;
// exports.stop = stop;
// exports.target = target;
// exports.toggle = toggle;
// exports.vary = vary;
// exports.while = whileCommand;
// exports.write = write;
//
exports.comment = {
   segment: commentSegment,
   line: commentLine
};

module.exports = exports;


function antenna(antennaData) {
   return 'Create Antenna ' + antennaData.name + ';';
}

function spacecraft(spacecraftData) {
   var lines = [];

   // name
   lines.push('Create Spacecraft ' + spacecraftData.name + ';');

   // epoch
   if (spacecraftData.mission.initial.epoch.DateFormat) {
      lines.push(spacecraftData.name + '.DateFormat = ' + spacecraftData.mission.initial.epoch.DateFormat + ';');
   }

   if (spacecraftData.mission.initial.epoch.Epoch) {
      lines.push(spacecraftData.name + '.Epoch = ' + spacecraftData.mission.initial.epoch.Epoch + ';');
   }

   // initial orbit
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

   return lines.join('\n');

}

function beginMissionSequence() {
   return 'BeginMissionSequence;';
}

function propagate(propagateData) {
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
