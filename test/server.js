var app = require ('../index'),
    supertest = require('supertest')(app),
    chai = require('chai'),
    expect = chai.expect

describe('The web server', function(){
  it('responds with hello world at /', function(done){
    supertest.get('/')
    .expect(200,'Hello, world.')
    .end(done)
  })
  it('responds with 400 if no campaign slug is provided', function(done) {
    supertest.get('/actions/')
    .expect(400,'No campaign slug provided.')
    .end(done)
  })
  it('responds with 404 if no campaign is found', function(done) {
    supertest.get('/actions/Senator-Foo-Please-Bar')
    .expect(404,'Action not found.')
    .end(done)
  })
})
