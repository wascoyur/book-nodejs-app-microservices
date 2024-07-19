import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import GetUserFilterDto from './dto/get-users-filter.dto';
import { UserDto } from './dto/user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('user') // Изменено здесь, чтобы указать корневой маршрут '/user'
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query() getUserFilterDto: GetUserFilterDto,
  ): Promise<{ items: UserDto[]; total: number }> {
    return this.userService.findAll(getUserFilterDto);
  }

  @Get(':id') // Этот метод теперь обрабатывает запросы к '/user/:id'
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id') // Этот метод также обрабатывает запросы к '/user/:id'
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id') // Этот метод обрабатывает запросы к '/user/:id'
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/verify') // Теперь этот метод обрабатывает запросы к '/user/verify'
  verification(@Body() dto: SignInDto): Promise<boolean> {
    return this.userService.verification(dto);
  }
}
