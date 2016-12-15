var UserService = require('../../services/UserService.js');
var _ = require('lodash');

describe('UserService tests', function() {
   /*
   var user = {
      _id: 0,
      username: 'username',
      password: 'password',
      data: 'data',
      test: true
   };
   var userWOPW = _.omit(user,'password');

   it('creates a user', function(done){ 

      var promise = UserService.create(user);
      console.log(JSON.stringify(promise));
      promise.then(function(err){
         console.log('inside then');
         expect(err).toBeUndefined();
         done();
      });

   });

   it('does not create duplicate user', function(done) {

      UserService.create(user).then(function(err){
         expect(err).toEqual('Username "' + user.username + '" is already taken');
         done();
      });

   });

   it('authenticates the user', function(done) {

      UserService.authenticate(user.username, user.password).then(function(jwtsign, secret){
         expect(jwtsign).toBeDefined();
         expect(secret).toBe(jasmine.any('String'));
         console.log(jwtsign);
         done();
      });
   });

   it('gets the user, omitting the password', function(done){

      UserService.getById(user._id).then(function(resUser){
         expect(resUser).toEqual(userWOPW);
         done();
      });
   });

   it('updates the user', function(done) {

      user.data = 'information';
      userWOPW = _.omit(user, 'password');

      UserService.update(user._id,user).then(function(err){
         expect(err).toBeUndefined();
         UserService.getById(user._id).then(function(resUser){
            expect(resUser).toEqual(userWOPW);
            done();
         });
      });
   });

   it('deletes the user', function(done) {

      UserService._delete(user._id).then(function(err){
         expect(err).toBeUndefined();
         done();
      });
   });
   */

});
