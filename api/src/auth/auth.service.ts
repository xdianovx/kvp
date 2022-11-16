import { CreateUserDto } from './../user/dto/create-user.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.findOne({
      where: {
        email: dto.email,
      },
    });

    if (candidate)
      throw new BadRequestException(
        'Данный email уже зарегестрирован в системе',
      );

    const user = await this.userService.create(dto);

    return {
      ...user,
      access_token: await this.generateJwt(user),
    };
  }

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto.email, dto.password);

    return {
      ...user,
      access_token: await this.generateJwt(user),
    };
  }

  async generateJwt(data: { id: number; email: string }) {
    const payload = { sub: data.id, email: data.email };
    const access_token = this.jwtService.sign(payload);
    return access_token;
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOne({
      where: {
        email: email,
      },
    });

    if (!user) throw new NotFoundException('Неверный логин или пароль');
    if (user.password !== pass)
      throw new NotFoundException('Неверный логин или пароль');

    return user;
  }
}
