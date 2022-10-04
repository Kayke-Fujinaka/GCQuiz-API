import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { BcryptProvider } from 'src/providers/bcrypt/bcrypt.provider';
import { Repository } from 'typeorm';
import { CreateUserService } from '../services/create-user.service';
import { newUser, user } from './mocks/users';

describe('Create user ', () => {
  let bcryptService: BcryptProvider;
  let createUserService: CreateUserService;
  let usersRepository: Repository<User>;

  const mockRepository = {
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        BcryptProvider,
      ],
    }).compile();

    createUserService = module.get<CreateUserService>(CreateUserService);

    bcryptService = module.get<BcryptProvider>(BcryptProvider);

    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.save.mockReset();
  });

  it('should be defined', () => {
    expect(createUserService).toBeDefined();
    expect(usersRepository).toBeDefined();
    expect(bcryptService).toBeDefined();
  });

  describe('execute', () => {
    it('should be create a new user', async () => {
      const hashedPassword = await bcryptService.genHash(newUser.password);
      mockRepository.create.mockReturnValue({
        ...user,
        password: hashedPassword,
      });
      mockRepository.save.mockReturnValue(user);
      const result = await createUserService.execute(newUser);

      expect(result).toMatchObject(user);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });

    it('should be return an exception when an user exists', async () => {
      mockRepository.findOne.mockReturnValue(user);

      expect(createUserService.execute(newUser)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });
});
