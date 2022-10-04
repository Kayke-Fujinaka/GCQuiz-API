import { GenderEnum } from 'src/enums/Gender';
import { CreateUserDto } from '../../dtos/create-user.dto';

export interface IUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderEnum;
  email: string;
  acceptTerms: boolean;
}

export const id = '86a5b68d-2eb0-4421-8531-4a3b98b9841d';

export const invalidId = '16a5b68d-2eb0-4421-8531-4a3b98b9841d';

export const user: IUserResponse = {
  id: '86a5b68d-2eb0-4421-8531-4a3b98b9841d',
  firstName: 'Caio',
  lastName: 'Silva',
  age: 20,
  gender: GenderEnum.MALE,
  email: 'caiocapua@hotmail.com',
  acceptTerms: true,
};

export const newUser: CreateUserDto = {
  firstName: 'Caio',
  lastName: 'Silva',
  age: 20,
  gender: GenderEnum.MALE,
  email: 'caiocapua@hotmail.com',
  password: '1234',
  acceptTerms: true,
};
