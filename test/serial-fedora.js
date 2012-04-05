var should = require('should');

var fedora = require('fedora');

var testNamespace = "node";
var testLabel = "A very nice test label";
var testResult = "";

describe('Test cases for the node-fedora package', function() {
	describe('createFedoraObject, will create a FedoraObject', function() {
		it('should create a FedoraObject', function(done) {
			fedora.createFedoraObject(testNamespace,testLabel, function(result){
				testResult = result;
				result.should.exist;
				result.should.include(testNamespace + ":");
				done();
			});
		});
	}),

	describe('getFedoraList, Get a list of FedoraObjects', function() {
		it('should return a list of FedoraObjects from the fedora repository', function() {
			fedora.getFedoraList("*",function(resultData){
				resultData.should.exist;
				resultData.should.include('result');
				resultData.should.not.be.empty;
			}, 
			function(error){
				should.not.exist(error);
			});
		})
	}),

	describe('getFedoraObject, get a fedoraObject', function() {
		it('should return a fedoraObject', function(done) {
			fedora.getFedoraObject(testResult, function(resultData){
				resultData.should.include(testResult);
				done();
			});
		});
	}),

	describe('deleteObject, will delete an object from fedora', function() {
		it('should delete the requested object from fedora', function(done) {
			fedora.deleteObject(testResult, function(resultData){
				var myregexp = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.?[0-9]*Z");
				resultData.should.match(myregexp);
				done();
			}, function(error){
				should.not.exist(error);
			});
		})
	}),

	describe('getNextPID, will get the next PID that is available from fedora', function() {
		it('should return the next PID from fedora', function(done) {
			fedora.getNextPID("node", function(resultData){
				resultData.should.include("node:");
				done();
			});
		});
	})
})
