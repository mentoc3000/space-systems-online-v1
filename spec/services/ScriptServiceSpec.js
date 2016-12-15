describe('ScriptService Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var ScriptService, $httpBackend, $q;
   var data = 'input text';
   var err = 'error';

   beforeEach(inject(function(_$httpBackend_, _$q_, _ScriptService_){
      $httpBackend = _$httpBackend_;
      $q = _$q_;
      ScriptService = _ScriptService_;

      $httpBackend.when('GET','header/header.html').respond(200);
      $httpBackend.when('GET','main/home.html').respond(200);
      $httpBackend.when('GET','main/footer.html').respond(200);
   }));

   afterEach(function(){ 
      expect($httpBackend.flush).not.toThrow();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
   });

   describe('Submit', function(){ 

      function httpTest(method, url, servicePromise, success, done){ 
         var response = $httpBackend.when(method,url);
         var res;
         if (success) {
            res = data;
            response.respond(200,data);
         } else {
            res = err;
            response.respond(500,err);
         }

         if (method === 'POST') {
            $httpBackend.expectPOST(url);
         }
         servicePromise.then(function(resData) {
            expect(resData).toEqual(res);
         });
      }


      it('submits the data', function(){ 
         var method = 'POST',
            url = '/api/sim/submit',
            servicePromise = ScriptService.Submit(data),
            success = true;
         httpTest(method, url, servicePromise, success);
      });

      it('responds with err on failure', function(){ 
         var method = 'POST',
            url = '/api/sim/submit',
            servicePromise = ScriptService.Submit(data),
            success = false;
         httpTest(method, url, servicePromise, success);
      });

      
   });
});


