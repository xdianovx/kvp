import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  name?: string;

  @IsEmail(
    {},
    {
      message: 'Введите email',
    },
  )
  email: string;

  @Length(8, 32, { message: 'Пароль должен содержать минимум 8 символов' })
  password: string;
}
