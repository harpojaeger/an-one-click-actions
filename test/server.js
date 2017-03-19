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
})
