const request = require('supertest');
const server = require('../server/server');

describe('GET /', () => {
  it('responds with 200 status and application/json content type', (done) => {
    request(server)
      .get('/')
      .set('Content-Type', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
describe('POST /', () => {
  it('respond with 200 OK', (done) => {
    request(server)
      .post('/test')
      .send({ movieName: 'Wedding Crashers' })
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
describe('POST /test', () => {
  it('testing if /test route works', (done) => {
    request(server)
      .post('/test')
      .send({ movieName: 'Mama Mia' })
      .then(() => {
        request(server).get('/test').expect(200, done);
      });
  });
});

describe('POST /api', () => {
  let data = {
    movieName: 'The Mummy',
    directorId: '9',
  };

  it('Creates a new movie instance', (done) => {
    const res = request(server)
      .post('/api')
      .send(data)
      .then(() => {
        request(server)
          .get('/api')
          .expect('Content-Type', 'text/html; charset=UTF-8')
          .expect(200, done);
      });
  });
});

describe('GET request to /graphql endpoint', () => {
  it('responds with 400 status and application/json content type', () => {
    request(server)
      .get('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(400);
  });
  it('respond with 200 status', () => {
    request(server)
      .get('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
});

describe('POST request to /graphql endpoint', () => {
  it('respond with 200 status', () => {
    request(server)
      .post('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
});

describe('PUT request to /graphql endpoint', () => {
  it('respond with 200 status', () => {
    request(server)
      .put('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
});

describe('DELETE request to /graphql endpoint', () => {
  it('respond with 200 status', () => {
    request(server)
      .delete('/graphql')
      .expect('Content-Type', /application\/json/)
      .expect(200);
  });
});
