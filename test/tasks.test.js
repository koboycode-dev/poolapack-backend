const request = require('supertest');
const app = require('../server');

describe('test all routes endpoint', function () {
    afterAll((done) => {
        if (app) {
            app.close(done);
        }
    });

    it('register users with empty body', function (done) {
        request(app)
            .post('/api/register')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({})
            .expect('Content-Type', /json/)
            .expect(422, done);
    });

    it('register users with body', function (done) {
        request(app)
            .post('/api/register')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({ "Users": [`example${Math.random()}@gmail.com`,`example${Math.random()}@gmail.com`] })
            .expect(204, done);
    });

    it('assign users with empty body', function (done) {
        request(app)
            .post('/api/assign')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({})
            .expect('Content-Type', /json/)
            .expect(422, done);
    });

    it('assign users with body', function (done) {
        request(app)
            .post('/api/assign')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({ 
                "user": "example123@gmail.com",
                "tasks": ["buy drink", "buy food"] 
            }).expect(204, done);
    });

    it('unassign users with empty body', function (done) {
        request(app)
            .post('/api/unassign')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({})
            .expect('Content-Type', /json/)
            .expect(422, done);
    });

    it('unassign users with body', function (done) {
        request(app)
            .post('/api/unassign')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({ 
                "user": "example123@gmail.com",
                "tasks": ["buy drink", "buy food"] 
            }).expect(204, done);
    });

    it('get task common with empty body', function (done) {
        request(app)
            .get('/api/tasks/common')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
    });

    it('get task common with body', function (done) {
        request(app)
            .get('/api/tasks/common')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({ "user": ["example21@gmail.com"] })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});