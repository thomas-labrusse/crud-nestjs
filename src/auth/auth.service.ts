import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(email: string, password: string) {
    // Verify that email is not yet in use
    const users = await this.usersService.find(email);
    // If in use, throw Exception
    if (users.length) {
      throw new BadRequestException('email already in use');
    }

    //  Hash the user password
    // Generate a random salt (to prevent rainbow list attacks)
    const salt = randomBytes(8).toString('hex');
    // Hash the password and salt together (Buffer helps TS to understand what is returned)
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    //  Join the hashed result and the salt together
    const result = salt + '.' + hash.toString('hex');
    // Create a new user and save it
    const randomId = Math.floor(Math.random() * 999);
    const user = await this.usersService.create(randomId, email, result);
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    console.log('USER:', user);
    //  TODO: change user[0] when only one user is retrieved
    const [salt, storedHash] = user[0].password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password provided');
    }

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    console.log('Login with payload: ', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
