import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { user, id, invalidId } from './mocks/users';
import { FindOneUserService } from '../services/find-one-user.service';

describe('Get one', () => {
  let findOneUserService: FindOneUserService;
  let usersRepository: Repository<User>;

  const mockRepository = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneUserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    findOneUserService = module.get<FindOneUserService>(FindOneUserService);

    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(findOneUserService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should return a one user', async () => {
      mockRepository.findOne.mockReturnValue(user);

      const result = await findOneUserService.execute(id);

      expect(result).toEqual(user);
      expect(result).toMatchObject(user);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should be able to return a exception when does not to find a user', () => {
      mockRepository.findOne.mockReturnValue(null);
      expect(findOneUserService.execute(invalidId)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(2);
    });
  });
});
