'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var scriptBuilder = require('../../lib/scriptBuilder');

function baseSimulation() {

   var simulation = {
      simulator: {
      },
      ground: {
         celestialBody: 'Earth',
         groundStations: [
            {
               name: 'station1',
               latitude: 10,
               longitude: -20,
               transmitter: 'transmitter1', //name
               receiver: 'receiver1' //name
            },
            {
               name: 'station2',
               latitude: -34,
               longitude: 78,
               transmitter: 'transmitter2', //name
               receiver: 'receiver2' //name
            }
         ],
         /*
         hardware: { // all hardware must be named
            transmitter: [ 
               {
               } 
            ],
            receiver: [ 
               {
               } 
            ],
            antenna: [ 
               {
               } 
            ]
         }
         */
      },
      space: {
         hardware: { // all hardware must be named
            /*
            transmitter: [ 
               {
               }
            ],
            */
            /*
            receiver: [ 
               {
               }
            ],
            */
            antenna: [
               {
                  name: 'satAntenna1'
               }
            ],
            /*
            thruster: [ 
               {
               }
            ],
            */
            /*
            tank: [ 
               {
               }
            ],
            */
            /*
            solarPower: [
               {
               }
            ],
            */
            /*
            nuclearPower: [
               {
               }
            ],
            */
            /*
            navigation: [
               {
               }
            ]
            */
         },
         craft: {
            name: 'sat1',
            attitude: {
            },
            ballistics: {
            },
            hardware: [ 
            ],
            mission: {
               initial: {
                  orbit: {
                     X: 1000,
                     Y: 82041,
                     Z: 1842.132,
                     VX: -892.12,
                     VY: -394.15,
                     VZ: 834.87,
                     SMA: 4.12,
                     ECC: -91.2,
                     INC: 0.42341,
                     RAAN: -94.1112,
                     AOP: 0.000391,
                     TA: 81.213,
                     RadPer: -991.231,
                     RadApo: 8.12874
                  },
                  epoch: {
                     DateFormat: 'dateFormat',
                     Epoch: 'epoch',
                  }
               },
               sequence: [
                  {
                     type: 'propagate',
                     propagatorName: 'propagatorName',
                     spacecraftName: 'satellite',
                     stopCondition: [
                        'sat.TA = 90',
                        'sat.Apoapsis'
                     ]
                  }
               ]
            }
         }
      }
   };
   return simulation;
}

describe('Line Builder Tests', function() {
   var simulation;

   describe('antenna',function() {
      beforeEach(function() {
         simulation = baseSimulation();
      });

      it('outputs create antenna line', function() {
         var output = scriptBuilder.block.antenna(simulation.space.hardware.antenna);
         expect(output).to.equal('Create Antenna ' + simulation.space.hardware.antenna.name + ';');
      });

      it('outputs empty string if antenna is empty', function () {
         var output = scriptBuilder.block.antenna({});
         expect(output).to.equal('');
      });
   });

   describe.skip('array', function() {
   });

   describe.skip('baryCenter',function() {
   });

   describe.skip('batchEstimatorInv',function() {
   });

   describe.skip('celestialBody',function() {
   });

   describe.skip('chemicalTank',function() {
   });

   describe.skip('chemicalThruster',function() {
   });

   describe.skip('coordinateSystem',function() {
   });

   describe.skip('contactLocator',function() {
   });

   describe.skip('differentialCorrector',function() {
   });

   describe.skip('electricTank',function() {
   });

   describe.skip('electricThruster',function() {
   });

   describe.skip('eclipseLocator',function() {
   });

   describe.skip('ephemerisFile',function() {
   });

   describe.skip('errorModel',function() {
   });

   describe.skip('fileInterface',function() {
   });

   describe.skip('finiteBurn',function() {
   });

   describe.skip('fminconOptimizer',function() {
   });

   describe.skip('formation',function() {
   });

   describe.skip('gmatFunction',function() {
   });

   describe.skip('groundStation',function() {
   });

   describe.skip('impulsiveBurn',function() {
   });

   describe.skip('liberationPoint',function() {
   });

   describe.skip('matlabFunction',function() {
   });

   describe.skip('nuclearPowerSystem',function() {
   });

   describe.skip('propagator',function() {
   });

   describe.skip('receiver',function() {
   });

   describe.skip('reportFile',function() {
   });

   describe.skip('simulator',function() {
   });

   describe.skip('snopt',function() {
   });

   describe.skip('solarPowerSystem',function() {
   });

   describe.skip('solarSystem',function() {
   });

   describe('spacecraft',function() {
      var spacecraftData, output, regex;
      beforeEach(function() {
         simulation = baseSimulation();
         spacecraftData = simulation.space.craft;
         output = scriptBuilder.block.spacecraft(spacecraftData);
      });

      it('Creates the spacecraft', function() {
         regex = new RegExp('^Create Spacecraft ' + spacecraftData.name + ';');
         expect(output).to.match(regex);
      });

      for (var key in spacecraftData) {
         if (spacecraftData.hasOwnProperty(key) & key !== 'name') {
            keyTest(spacecraftData.name, key, spacecraftData[key]);
         }
      }

      function keyTest(name, key, val) {
         it('adds ' + key + ' property', function(){
            regex = new RegExp("\\n" + name + '\\.' + key + ' \\= ' + val + ';($|\\n)');
            expect(output).to.match(regex);
         });
      }

      it('outputs an empty string when spacecraft is blank', function() {
         output = scriptBuilder.block.spacecraft({});
         expect(output).to.equal('');
      });

   });

   describe.skip('statisticsAcceptFilter',function() {
   });

   describe.skip('statisticsRejectFilter',function() {
   });

   describe.skip('string',function() {
   });

   describe.skip('trackingFileSet',function() {
   });

   describe.skip('transmitter',function() {
   });

   describe.skip('transponder',function() {
   });

   describe.skip('variable',function() {
   });

   describe.skip('vf13ad',function() {
   });

   describe.skip('achieve',function() {
   });

   describe.skip('assignment',function() {
   });

   describe.skip('beginFiniteBurn',function() {
   });

   describe('beginMissionSequence',function() {
      it('creates command', function(){
         var output = scriptBuilder.block.beginMissionSequence();
         expect(output).to.equal('BeginMissionSequence;');
      });
   });

   describe.skip('beginScript',function() {
   });

   describe.skip('callGmatFunction',function() {
   });

   describe.skip('callMatlabFunction',function() {
   });

   describe.skip('callPythonFunction',function() {
   });

   describe.skip('endFiniteBurn',function() {
   });

   describe.skip('findEvents',function() {
   });

   describe.skip('for',function() {
   });

   describe.skip('getEphemStates',function() {
   });

   describe.skip('global',function() {
   });

   describe.skip('if',function() {
   });

   describe.skip('maneuver',function() {
   });

   describe.skip('markPoint',function() {
   });

   describe.skip('minimize',function() {
   });

   describe.skip('nonlinearConstraint',function() {
   });

   describe.skip('optimize',function() {
   });

   describe.skip('penUpPenDown',function() {
   });

   describe('propagate',function() {
      var propagateData, output;
      beforeEach(function() {
         simulation = baseSimulation();
         propagateData = simulation.space.craft.mission.sequence[0];
         output = scriptBuilder.block.propagate(propagateData);
      });

      it('builds script line', function() {
         var expected = 'Propagate ' + propagateData.propagatorName +
            '(' + propagateData.spacecraftName + ') ' +
            '{' + propagateData.stopCondition.join(', ') + '};';
         expect(output).to.equal(expected);
      });
   });

   describe.skip('report',function() {
   });

   describe.skip('runEstimator',function() {
   });

   describe.skip('runSimulator',function() {
   });

   describe.skip('set',function() {
   });

   describe.skip('stop',function() {
   });

   describe.skip('target',function() {
   });

   describe.skip('toggle',function() {
   });

   describe.skip('vary',function() {
   });

   describe.skip('while',function() {
   });

   describe.skip('write',function() {
   });
});

describe('Script Builder Tests', function() {
   describe('Spacecraft builder', function() {

      it('adds spacecraft lines', function() {
         var fullSim = baseSimulation();
         var spacecraftData = fullSim.space.craft;
         var output = scriptBuilder.buildSpacecraft(spacecraftData);
         var spacecraftOutput = scriptBuilder.buildSpacecraft(spacecraftData);
         expect(output).to.contain(spacecraftOutput);
      });
   });

   describe('Hardware builder', function() {

      it('builds empty string for empty object', function() {
         var output = scriptBuilder.buildHardware({});
         expect(output).to.equal('');
      });

      it('adds antenna lines', function() {
         var fullSim = baseSimulation();
         var hardwareData = fullSim.space.hardware;
         var output = scriptBuilder.buildHardware(hardwareData);
         var antennaOutput = scriptBuilder.block.antenna(hardwareData.antenna[0]);
         expect(output).to.contain(antennaOutput);
      });
   });

   describe('Mission Sequence builder', function() {
      
      it('builds empty string for empty object', function() {
         var output = scriptBuilder.buildMissionSequence({});
         expect(output).to.equal('');
      });

      it('begins the mission sequence', function() {
         var fullSim = baseSimulation();
         var sequenceData = fullSim.space.craft.mission.sequence;
         var output = scriptBuilder.buildMissionSequence(sequenceData);
         expect(output).to.contain(scriptBuilder.block.beginMissionSequence());
      });

      it('contains the propagate lines', function() {
         var fullSim = baseSimulation();
         var sequenceData = fullSim.space.craft.mission.sequence;
         var output = scriptBuilder.buildMissionSequence(sequenceData);
         expect(output).to.contain(scriptBuilder.block.propagate(sequenceData[0]));
      });
   });
});
