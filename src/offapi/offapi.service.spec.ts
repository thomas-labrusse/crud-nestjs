import { Test, TestingModule } from '@nestjs/testing';
import { OffapiService } from './offapi.service';

describe('OffapiService', () => {
  let service: OffapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffapiService],
    }).compile();

    service = module.get<OffapiService>(OffapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
