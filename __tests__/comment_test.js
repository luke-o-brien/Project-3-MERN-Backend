/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️
// ? This is a testing suite. It ties everything together.
// ? 'describe' is a mocha keyword, to create suites of tests.
describe('Testing POST /api/all-sounds/:soundId/comments', () => {

  // * Mocha
  // ? before each test we want to run some code to setup our environment.
  beforeEach(done => {
    // ? Seed the database with some test data.
    setup(done)
  })

  // * Mocha
  // ? after each test, we need to clear out our database, OR ELSE
  // ? we will have an inconsistent testing environment
  afterEach(done => {
    tearDown(done)
  })

  // ! FINALLY WE WILL WRITE TESTS:
  it('should return a 200 response status code', (done) => {
    // ! api: supertest
    api.get('/api/all-sounds/:soundId/comments')
      .end((err, res) => {
        // ! Chai: make an assertion
        expect(res.status).to.eq(200)
        // ! Call done() when the test is finished. 
        done()
      })
  })
})