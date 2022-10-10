import { Test, TestingModule } from '@nestjs/testing';
import { OffapiService } from './offapi.service';
import { HttpService } from '@nestjs/axios';

describe('OffapiService', () => {
  let offapiService: OffapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OffapiService,
        {
          provide: HttpService,
          useValue: {
            fn: () => {
              return;
            },
          },
        },
      ],
    }).compile();

    offapiService = module.get<OffapiService>(OffapiService);
  });

  it('should be defined', () => {
    expect(offapiService).toBeDefined();
  });
});
