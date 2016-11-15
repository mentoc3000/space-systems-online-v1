module.exports = function(grunt) {

   // load plugins
   [
      // 'grunt-contrib-jasmine',
      'grunt-contrib-jshint',
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
      exec: {
         linkchecker: {
            cmd: 'linkchecker http://localhost:3000'
         }
      }
   });


   // register tasks
   grunt.registerTask('default',['jshint','exec']);


};
