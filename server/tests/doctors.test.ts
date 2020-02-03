import app from '../server';
import request from 'supertest';

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
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('doctors')
  });

  it('should fetch all doctors', async () => {
    const res = await request(app).get('/api/doctors');
    expect(res.status).toEqual(200);
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

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('doc');
  });

  it('should delete a doctor', async () => {
    const res = await request(app).delete('/api/doctors/5e359ea3ebb26721f4788e13');
    expect(res.status).toEqual(204);
  });
});