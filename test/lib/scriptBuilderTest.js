'use strict';

var expect = require('chai').expect;
var scriptBuilder = require('../../lib/scriptBuilder');

describe('Script Builder Tests', function() {
   describe('antenna',function() {
      var antennaData;
      beforeEach(function() {
         antennaData = {
            name: 'antennaName'
         };
      });

      it('outputs create antenna line', function() {
         var output = scriptBuilder.antenna(antennaData);
         expect(output).to.equal('Create Antenna ' + antennaData.name + ';');
      });

      it('requires the antenna name', function() {
         delete antennaData.name;

         expect(scriptBuilder.antenna.bind(scriptBuilder,antennaData)).to.throw(Error);
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
      var spacecraftData;
      spacecraftData = {
         name: 'spacecraftName',
         DateFormat: 'dateFormat',
         Epoch: 'epoch',
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
      };
      var output = scriptBuilder.spacecraft(spacecraftData);
      var regex;

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
         var output = scriptBuilder.beginMissionSequence();
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

   describe.skip('propagate',function() {
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