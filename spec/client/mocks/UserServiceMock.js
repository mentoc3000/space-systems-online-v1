var Q = require('q');

var exports = module.exports = {};

exports.GetCurrent = GetCurrent;
exports.GetAll = GetAll;
exports.GetById = GetById;
exports.GetByUsername = GetByUsername;
exports.Create = Create;
exports.Update = Update;
exports.Delete = Delete;


// http routines


function GetCurrent() {
   // return returnPromise(httpValid);
   return returnPromise();
   // return httpValid;
}

function GetAll() {
   return returnPromise(httpValid);
}

function GetById(_id) {
   return returnPromise(httpValid);
}

function GetByUsername(username) {
   return returnPromise(httpValid);
}

function Create(user) {
   return returnPromise(httpValid);
}

function Update(user) {
   return returnPromise(httpValid);
}

function Delete(_id) {
   return returnPromise(httpValid);
}


function returnPromise() {
   var deferred = Q.defer();
   deferred.resolve(handleSuccess());
   deferred.reject(handleError());
   return deferred.promise;
}


function handleSuccess() {
   var data = {
      user: ''
   };
   return data;
}

function handleError() {
   var data = {
      message: 'error'
   };
   return data;
}

var httpValid = {
   data: {
      user: ''
   },
   status: 200,
   headers: function(){},
   config: {},
   statusText: ''
};

/*
var httpInvalid = {
   data: '',
   status: 404,
   headers: function(){},
   config: {},
   statusText: ''
};
*/
