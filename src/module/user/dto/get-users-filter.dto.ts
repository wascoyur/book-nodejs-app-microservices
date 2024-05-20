import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class GetUserFilterDto {
  @ApiProperty({
    description: '',
    type: [String],
    required: false,
    example: ['79001110102', '79001110103'],
  })
  @IsOptional()
  @IsString({
    each: true,
    message: 'Fields in array "userIds" most be strings',
  })
  readonly phones?: string[];

  @ApiProperty({ description: '', type: Number, required: false, example: 20 })
  @IsOptional()
  @IsNumber()
  readonly take?: number;

  @ApiProperty({ description: '', type: Number, required: false, example: 20 })
  @IsOptional()
  @IsNumber()
  readonly skip?: number;
}
