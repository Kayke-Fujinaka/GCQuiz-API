import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RemoveUserService } from '../services/remove-user.service';
import { user, id, invalidId } from './mocks/users';

describe('remove user', () => {
  let removeUserService: RemoveUserService;
  let usersRepository: Repository<User>;

  const mockRepository = {
    findOne: jest.fn(),
    softDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveUserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    removeUserService = module.get<RemoveUserService>(RemoveUserService);

    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  beforeEach(() => {
    mockRepository.findOne.mockReset();
    mockRepository.softDelete.mockReset();
  });

  it('should be defined', () => {
    expect(removeUserService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should be remove a user', async () => {
      mockRepository.findOne.mockReturnValue(user);
      mockRepository.softDelete.mockReturnValue(true);

      const result = await removeUserService.execute(id);

      expect(result).toBe(undefined);
      expect(mockRepository.softDelete).toBeCalledTimes(1);
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should be able to return a exception when does not to find a user', async () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(removeUserService.execute(invalidId)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
