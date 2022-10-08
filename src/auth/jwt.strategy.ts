import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log('secret :', jwtConstants.secret);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  //   Passport verifies the JWT's signature and decodes the JSON, then invokes the validate() method passing the decoded JSON as its single parameter.
  async validate(payload: any) {
    console.log(`got here with payload : ${payload}`);
    return { id: payload.sub, email: payload.email };
  }
}
