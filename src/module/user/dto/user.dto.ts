import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class UserDto {
  @ApiProperty({ description: 'User identifer', required: true, type: String })
  @Expose()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'User login', required: true, type: String })
  @Expose()
  @IsString()
  login: string;

  @ApiProperty({ description: 'User phone', required: true, type: String })
  @Expose()
  @IsString()
  phone: string;

  @ApiProperty({ description: 'User first name', required: true, type: String })
  @Expose()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'User last name', required: true, type: String })
  @Expose()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'User middle name',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  middleName: string;

  @ApiProperty({
    description: 'User e-mail',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  email: string;

  constructor(entity: Partial<UserEntity>) {
    return plainToInstance(UserDto, entity, { excludeExtraneousValues: true });
  }
}
