import { Test, TestingModule } from '@nestjs/testing';
import { OffapiController } from './offapi.controller';
import { OffapiService } from './offapi.service';

describe('OffapiController', () => {
  let controller: OffapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffapiController],
      providers: [OffapiService],
    }).compile();

    controller = module.get<OffapiController>(OffapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
