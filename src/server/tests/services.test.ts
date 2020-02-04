import request from 'supertest';
import app from '../server';

describe('Test Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/services')
      .send({
        title: 'test is cool',
        desc: 'test desc',
        img: 'test'
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('service')
  });

  it('should fetch all posts', async () => {
    const res = await request(app).get('/api/services');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('services');
  });

  it('should update a post', async () => {
    const res = await request(app)
      .put('/api/services/5e358fe389cbfb0a0457e405')
      .send({
        title: "updated",
        desc: 'updated title',
        img: 'Lorem ipsum',
      });

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('service');
  });

  it('should delete a post', async () => {
    const res = await request(app).delete('/api/services/5e359022b628160574ecaf0d');
    expect(res.status).toEqual(204);
  });
});