import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as crypto from 'node:crypto';
import * as argon from 'argon2';
import GetUserFilterDto from './dto/get-users-filter.dto';
import { UserDto } from './dto/user.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(user: CreateUserDto): Promise<void> {
    const userExist = await this.userRepository.checkExistUser({
      phone: user.phone,
      login: user.login,
    });

    if (userExist) {
      throw new ConflictException('User already Exist');
    }

    const salt = crypto.randomBytes(32);
    const hash = await argon.hash(user.password, { salt });

    await this.userRepository.createUser({
      passwordHash: hash,
      passwordSalt: salt.toString('hex'),
      ...user,
    });
  }

  async findAll(
    getUserFilterDto: GetUserFilterDto,
  ): Promise<{ items: UserDto[]; total: number }> {
    const { items: users, total } =
      await this.userRepository.findAndCount(getUserFilterDto);
    const dots = users.map((user) => {
      return new UserDto(user);
    });
    return { items: dots, total };
  }

  findOne(id: string) {
    console.log(`This action returns a #${id} user`);
    return this.userRepository.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.log(`This action updates a #${id} user`);
    return this.userRepository.updateUser({ userId: id, ...updateUserDto });
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }
  async verification(obj: SignInDto): Promise<boolean> {
    const { login, password } = obj;
    const user = await this.userRepository.findByLogin(login);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await argon.verify(user.passwordHash, password);
  }
}
