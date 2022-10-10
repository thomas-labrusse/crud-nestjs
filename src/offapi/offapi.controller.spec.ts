import { Test, TestingModule } from '@nestjs/testing';
import { OffapiController } from './offapi.controller';
import { OffapiService } from './offapi.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HttpModule } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/common';

describe('OffapiController', () => {
  let controller: OffapiController;
  const mockCacheManager = {
    set: jest.fn(),
    get: jest.fn(),
    del: jest.fn(),
    reset: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [OffapiController],
      providers: [
        OffapiService,
        JwtAuthGuard,
        { provide: CACHE_MANAGER, useValue: mockCacheManager },
      ],
    }).compile();

    controller = module.get<OffapiController>(OffapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
