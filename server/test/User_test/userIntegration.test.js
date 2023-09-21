import app from '../../server';
import supertest from 'supertest';
import db from '../../Database/models';

const request = supertest(app);

describe('Testing Route User', () => {
  beforeAll(done => {
    db.User.destroy({
      where: {},
      truncate: { cascade: true }
    });
    done();
  });

  it('post signup endpoint', async done => {
    const username = 'testtttf';
    const password = 'Password45%';
    const email = 'test@test.com';

    request
      .post('/api/users/signup')
      .send({ username, password, email })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toMatch('User has been signed up !');
        done();
      });
  });

  it('should have an error on post signup ', async done => {
    const password = 'test';
    const email = 'test@test.com';

    request
      .post('/api/users/signup')
      .send({ password, email })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        expect(res.body.error.username[0]).toMatch('Veuillez saisir votre pseudo');
        done();
      });
  });
});
