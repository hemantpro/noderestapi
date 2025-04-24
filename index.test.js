const request = require('supertest'); // Import required modules
const app = require('./index'); 

describe('GET /:username', () => {
    it('should return a list of gists for a user', async () => {
        const response = await request(app).get('/octocat');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('url');
        }
    });
});