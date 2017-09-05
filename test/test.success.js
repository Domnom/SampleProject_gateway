var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should(),
	expect = chai.expect;
 	chai.use(chaiHttp);

var HelpfulService = require('../services/Helpful.service');

describe("Good - Helpful service", function() {

 	var helpfulService;

 	before(function() {
 		helpfulService = new HelpfulService();
 	});

 	it ('add -> Add some numbers', function() {

 		var intTotal = helpfulService.add(1, 20);

 		expect(intTotal).to.equal(21);
 	});

 	it ('subtract -> Subtract some numbers', function() {

 		var intTotal = helpfulService.subtract(5, 3);

 		expect(intTotal).to.equal(2);
 	
 	});

 	it ('Should get the envs set in this server', function() {

 		var envObj = helpfulService.getEnv();

 		expect(envObj).to.have.property('BACKEND_API_URL').to.equal('http://sample-project-backend');
 	});

 	it ('Should ping the backend server', function(done) {

 		chai.request('0.0.0.0')
 			.get('/ping/backend')
 			.end(function(err, res) {

 				expect(res).to.have.status(200);
 				expect(res.body).to.include.all.keys('success', 'body');
 				expect(res.body.success).to.equal(true);
 				expect(res.body.body).to.include.all.keys('success', 'data');

 				done();
 			});

 	});

 })