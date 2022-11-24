import { Test, TestingModule } from '@nestjs/testing';
import { Monuments } from './monuments';

describe('Monuments', () => {
  let provider: Monuments;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Monuments],
    }).compile();

    provider = module.get<Monuments>(Monuments);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
