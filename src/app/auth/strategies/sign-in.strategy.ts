import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SignInService } from '../services/sign-in.service';

@Injectable()
export class SignInAuthStrategy extends PassportStrategy(
  Strategy,
  'SignInAuthStrategy',
) {
  constructor(private _signInService: SignInService) {
    super({ usernameField: 'email' });
  }

  validate(email: string, password: string) {
    return this._signInService.execute({ email, password });
  }
}
