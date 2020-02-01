// @ts-ignore
const request = require('supertest');
const app = require('../server/server');
const doctors_create = require('../server/controllers/doctors.controller');

describe('Test Endpoints', () => {
  it('should create a new doctor', async () => {
    const res = await request(app)
      .post('/api/doctors')
      .send({
        doc_name: 'test is cool',
        speciality: 'test desc',
        desc: 'test',
        img: 'test',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('doctors')
  });

  it('should fetch all doctors', async () => {
    const res = await request(app).get('/api/doctors');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('doctors');
  });

  it('should update a doctor', async () => {
    const res = await request(app)
      .put('/api/doctors/')
      .send({
        doc_name: 'test is cool',
        speciality: 'test desc',
        desc: 'test',
        img: 'test',
        selected_day: '6',
        selected_time: '7',
        user_tel: 'test',
        user_name: 'test',
        booked: true
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('doc');
  });

  it('should delete a doctor', async () => {
    const res = await request(app).delete('/api/doctors/5e359ea3ebb26721f4788e13');
    expect(res.statusCode).toEqual(204);
  });
});