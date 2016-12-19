'use strict';

var Q = require('q');
var Promise = Q.Promise;

describe('MainController Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var $controller, UserService;

   beforeEach(inject(function(_$controller_, _UserService_){
      $controller = _$controller_;
      UserService = _UserService_;
   }));

   var controller;

   describe('Initialize', function() {

   });
});
