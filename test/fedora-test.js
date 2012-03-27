var assert = require('assert');
var fedora = require('../lib/fedora');

module.exports = {
	'test1 GetFedoraList': function(beforeExit, assert) {
		xml = fedora.getFedoraList();
		assert.isNotNull(xml);
	},
	'test2 GetFedoraItem': function(beforeExit, assert) {
		xml = fedora.getFedoraObject();
		assert.isNotNull(xml);
	},
	'test3 GetNextPID': function(beforeExit, assert) {
		
		fedora.createFedoraObject("node", function(result){
			assert.includes(result,"node:");
		});
	}
};
// uuid
//mocha, connect
