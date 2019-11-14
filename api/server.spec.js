const request = require('supertest');

const server = require('./server');

describe('server', function () {
  describe('GET /', function () {
    //run the server
    // make a GET request to 
    it('should return 200 OK', function () {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    })

    it('should return JSON formatted response', function () {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        })
    })
    it('should return 200 OK', function () {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        })
    })

  });
});

// then endpoint returns the correct http status code based on input
// the endpoint returns the right data format (json in our case)
//the endpoint returns the right data in the body based on input. 

// ?? What is the use of headers? ... not just used to pass data when there is not body. They are a way for the server and the client to communicate to 'talk to each other' 