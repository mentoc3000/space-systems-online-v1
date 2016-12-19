'use strict';

module.exports = function(grunt) {

   // load plugins
   [
      'grunt-karma',
      'grunt-contrib-jshint',
      'grunt-mocha-test',
      'grunt-exec'
   ].forEach(function(task){
      grunt.loadNpmTasks(task);
   });


   // configure plugins
   grunt.initConfig({
      // grunt-contrib-concat here
      jshint: {
         options: {
            jshintrc: true
         },
         all: [
            'server.js',
            'app/**/*.js',
            'controllers/**/*.js',
            'services/**/*.js',
            'spec/**/*.js',
            'test/**/*.js',
            'lib/*.js'
         ]
      },
      karma: {
         unit: {
            configFile: 'karma.conf.js',
            singleRun: true,
            // browsers: ['PhantomJS']
         }
      },
      mochaTest: {
         test: {
            options: {
               reporter: 'spec',
               noFail: false
            },
            src: [
               'test/**/*Test.js'
            ]
         }
      },
      exec: {
         // linkchecker: {
         //    cmd: 'linkchecker http://localhost:3000'
         // }
      }
   });


   // register tasks
   grunt.registerTask('default',[
      'jshint',
      'karma',
      'mochaTest',
      // 'exec'
   ]);


};
