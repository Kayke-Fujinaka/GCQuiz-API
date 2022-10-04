import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { loginDataIncorrect, user } from 'src/app/auth/__tests__/mocks/user';
import { User } from 'src/entities/user.entity';
import { BcryptProvider } from 'src/providers/bcrypt/bcrypt.provider';
import { Repository } from 'typeorm';
import { SignInService } from '../services/sign-in.service';

describe('AuthService', () => {
  let usersRepository: Repository<User>;
  let bcryptProvider: BcryptProvider;
  let jwtProvider: JwtService;
  let signInService: SignInService;

  const mockRepository = {
    findOne: jest.fn(),
  };

  const mockJwtProvider = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignInService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        BcryptProvider,
        JwtService,
        // {
        //   provide: getRepositoryToken(User),
        //   useValue: mockJwtProvider,
        // },
      ],
    }).compile();

    signInService = module.get<SignInService>(SignInService);
    bcryptProvider = module.get<BcryptProvider>(BcryptProvider);
    jwtProvider = module.get<JwtService>(JwtService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  beforeEach(() => {
    mockRepository.findOne.mockReset();
  });

  it('should be defined', () => {
    expect(signInService).toBeDefined();
    expect(usersRepository).toBeDefined();
    expect(jwtProvider).toBeDefined();
    expect(bcryptProvider).toBeDefined();
  });

  describe('execute', () => {
    it('should be return an exception when an email is incorrect', async () => {
      mockRepository.findOne.mockReturnValue(undefined);

      expect(signInService.execute(loginDataIncorrect)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    it('should be return an exception when password is invalid', async () => {
      mockRepository.findOne.mockReturnValue(user);

      expect(signInService.execute(loginDataIncorrect)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });

    // it('should be return a jwt token', async () => {
    //   mockRepository.findOne.mockReturnValue(user);
    //   mockJwtProvider.sign.mockReturnValue(jwtToken);

    //   const result = await signInService.execute(loginDataCorrect);
    //   //   const accessToken = jwtProvider.sign(payload);

    //   console.log(result);
    // });
  });
});
