import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';
import { LoginDto } from './dtos/login.dto';
import { SignInAuthGuard } from './guards/sign-in-auth.guard';
import { SignInService } from './services/sign-in.service';

@Controller()
@ApiTags('auth')
export class AuthController {
  constructor(private readonly _signInService: SignInService) {}

  @ApiOperation({ summary: 'Login' })
  @IsPublic()
  @UseGuards(SignInAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async findUserByEmail(@Body() data: LoginDto) {
    return this._signInService.execute(data);
  }
}
