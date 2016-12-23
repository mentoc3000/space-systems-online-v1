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

module.exports = exports;


function antenna(antennaData) {
   if (!antennaData.name) throw new Error('Name is required');

   return 'Create Antenna ' + antennaData.name + ';';
}

function spacecraft(spacecraftData) {
   checkInput(spacecraftData);

   var lines = [];

   // name
   lines.push('Create Spacecraft ' + spacecraftData.name + ';');

   // epoch
   if (spacecraftData.DateFormat) {
      lines.push(spacecraftData.name + '.DateFormat = ' + spacecraftData.DateFormat + ';');
   }

   if (spacecraftData.Epoch) {
      lines.push(spacecraftData.name + '.Epoch = ' + spacecraftData.Epoch + ';');
   }

   // initial orbit
   if (spacecraftData.X) {
      lines.push(spacecraftData.name + '.X = ' + spacecraftData.X + ';');
   }

   if (spacecraftData.Y) {
      lines.push(spacecraftData.name + '.Y = ' + spacecraftData.Y + ';');
   }

   if (spacecraftData.Z) {
      lines.push(spacecraftData.name + '.Z = ' + spacecraftData.Z + ';');
   }

   if (spacecraftData.VX) {
      lines.push(spacecraftData.name + '.VX = ' + spacecraftData.VX + ';');
   }

   if (spacecraftData.VY) {
      lines.push(spacecraftData.name + '.VY = ' + spacecraftData.VY + ';');
   }

   if (spacecraftData.VZ) {
      lines.push(spacecraftData.name + '.VZ = ' + spacecraftData.VZ + ';');
   }

   if (spacecraftData.SMA) {
      lines.push(spacecraftData.name + '.SMA = ' + spacecraftData.SMA + ';');
   }

   if (spacecraftData.ECC) {
      lines.push(spacecraftData.name + '.ECC = ' + spacecraftData.ECC + ';');
   }

   if (spacecraftData.INC) {
      lines.push(spacecraftData.name + '.INC = ' + spacecraftData.INC + ';');
   }

   if (spacecraftData.RAAN) {
      lines.push(spacecraftData.name + '.RAAN = ' + spacecraftData.RAAN + ';');
   }

   if (spacecraftData.AOP) {
      lines.push(spacecraftData.name + '.AOP = ' + spacecraftData.AOP + ';');
   }

   if (spacecraftData.TA) {
      lines.push(spacecraftData.name + '.TA = ' + spacecraftData.TA + ';');
   }

   if (spacecraftData.RadPer) {
      lines.push(spacecraftData.name + '.RadPer = ' + spacecraftData.RadPer + ';');
   }

   if (spacecraftData.RadApo) {
      lines.push(spacecraftData.name + '.RadApo = ' + spacecraftData.RadApo + ';');
   }

   return lines.join('\n');

   // private functions

   function checkInput(spacecraftData) {
      // name
      if (!spacecraftData.name) throw new Error('Name is required');
   }
}

function beginMissionSequence() {
   return 'BeginMissionSequence;';
}

function propagate(propagateData) {
   if (!propagateData.spacecraftName) throw new Error('Spacecraft name is required');
   if (!propagateData.propagatorName) throw new Error('Propagator name is required');
   
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
