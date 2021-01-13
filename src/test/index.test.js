const request = require('supertest')
const server = require('../index')

describe('Get Endpoints', () => {
    it('Get', async (done) => {
        const res = await request(server)
            .get('/')
            .send({
                userId: 1,
                title: 'First unit test',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
        done();
    })
})

afterAll(async done => {
    // close server conection
    server.close();
    done();
});