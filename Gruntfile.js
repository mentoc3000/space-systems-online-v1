module.exports = function(grunt) {

   // load plugins
   [
      'grunt-karma',
      'grunt-contrib-jshint',
      'grunt-contrib-jasmine',
      'grunt-exec'
   ].forEach(function(task){
      grunt.loadNpmTasks(task);
   });


   // configure plugins
   grunt.initConfig({
      // grunt-contrib-concat here
      jshint: {
         app: [
            'server.js',
            'app/js/**/*.js'
         ],
         qa: [
            'Gruntfile.js',
            'tests/**/*.js',
            'app/tests/**/*.js'
         ]
      },
      karma: {
         unit: {
            configFile: 'karma.conf.js',
            singleRun: true,
            // browsers: ['PhantomJS']
         }
      },
      jasmine: {
         specs: 'spec/server/**/*Spec.js',
         helpers: 'spec/helpers/**/*.js'
      },
      exec: {
         linkchecker: {
            cmd: 'linkchecker http://localhost:3000'
         }
      }
   });


   // register tasks
   grunt.registerTask('default',[
      'jshint',
      'karma',
      'jasmine',
      'exec'
   ]);


};
