// Force the server test suite to run first
require('./server')
var app = require ('../index'),
    supertest = require('supertest')(app),
    chai = require('chai'),
    expect = chai.expect


describe('The action handler', function(){
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
  it('redirects to the HTML form signup page if no email is provided', function(done){
    supertest.get('/actions/Affinity-Opt-In')
    .expect(302)
    .expect('Location', 'https://actionnetwork.org/forms/throw-some-sand-in-the-gears-of-the-right-wing-machine')
    .end(done)
  })
  it('redirects to the thank you page after successful form submission', function(done){
    supertest.get('/actions/Affinity-Opt-In')
    .query(
      {
        email: 'foo@bar.com'
      }
    )
    .expect(302)
    .expect('Location','https://actionnetwork.org/forms/throw-some-sand-in-the-gears-of-the-right-wing-machine/thankyou')
    .end(done)
  })
})
