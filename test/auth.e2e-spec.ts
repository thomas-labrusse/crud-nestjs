import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication (e2e)', () => {
  let app: INestApplication;
  const email = 'bla@bla.com';
  const password = 'bla';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should handles a signup request', async () => {
    return await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(email);
      });
  });
  it('should return a jwt when signin up and login in', async () => {
    await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email, password })
      .expect(201);
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password })
      .expect(201)
      .then((res) => {
        expect(res.body.access_token).toBeDefined();
      });
  });
});
