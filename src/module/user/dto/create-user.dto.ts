import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Идентификтор пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'User login', required: true, type: String })
  @Expose()
  @IsString()
  login: string;

  @ApiProperty({ description: 'User passwords', required: true, type: String })
  @Expose()
  @IsString()
  password: string;

  @ApiProperty({ description: 'User phone', required: true, type: String })
  @Expose()
  @IsString()
  phone: string;

  @ApiProperty({ description: 'User name', required: true, type: String })
  @Expose()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last User name', required: true, type: String })
  @Expose()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Middle User name',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  middleName: string;

  @ApiProperty({
    description: 'user e-mail',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  email: string;
}
