/*
var request = require('supertest');
// var really_need = require('really-need'); // jshint ignore:line
require = require('really-need');

describe('Loading Express', function() {

   var server;

   beforeEach(function(){
      this.timeout(5000);
      server = require('../../server', {
         // make sure server actually closes after
         // the close signal has been sent.  The 
         // cache needs to be cleared.
         // https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/
         bustCache: true
      });
   });
   
   afterEach(function(done) {
      server.close(done);
   });

   it('responds to /', function(done) {
      request(server)
      .get('/')
      .expect(302,done);
   });

   it('redirects', function(done) {
      request(server)
      .get('/not/a/good/path')
      .expect(404,done);
   });
});
*/
