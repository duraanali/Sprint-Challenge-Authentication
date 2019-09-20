const request = require('supertest');

const server = require('../api/server.js');

describe('auth-router.js', () => {
    describe('POST /api/auth/register', () => {
        it('returns 201 CREATED', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'lambda123', password: 'mypassword123456' })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });

        it('returns JSON', done => {
            request(server)
                .post('/api/auth/register')
                .send({ username: 'lambda', password: 'mypassword' })
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                    done();
                });
        });
    });

    describe('POST /api/auth/login', () => {
        it('returns 200 OK', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'lambda123', password: 'mypassword123456' })
                .then(res => {
                    expect(res.status).toBe(200)
                });
        });

        it('returns JSON', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'lambda', password: 'mypassword' })
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
    });
});