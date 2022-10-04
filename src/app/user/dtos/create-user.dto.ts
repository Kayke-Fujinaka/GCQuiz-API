import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { GenderEnum } from 'src/enums/Gender';

export class CreateUserDto {
  @ApiProperty({ description: 'Primeiro nome do usuário' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Último nome do usuário' })
  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @ApiProperty({ description: 'Gênero do usuário', enum: GenderEnum })
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @ApiProperty({ description: 'Termos de uso da aplicação' })
  @IsBoolean()
  acceptTerms: boolean;
}
