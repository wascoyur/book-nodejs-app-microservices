import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'login',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Field "login" most be field in' })
  @IsString({ message: 'Fiel "login" most be string' })
  readonly login: string;

  @ApiProperty({
    description: 'password',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Field "password" most be field in' })
  @IsString({ message: 'Field "password" most be string' })
  readonly password: string;
}
