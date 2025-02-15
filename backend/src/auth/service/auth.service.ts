import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUserDTO.dto';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(request: CreateUserDto): Promise<any> {
    const users = await this.userService.findEmail(request.email);
    if (users) {
      throw new BadRequestException('Email in use');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(request.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    const user = await this.userService.userCreate(
      request.email,
      result,
      request.username,
    );
    return user;
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findEmail(email);
    if (user) {
      throw new BadRequestException('Too Many People');
    }
    if (user.password != pass)
      throw new UnauthorizedException('Password is wrong');

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
