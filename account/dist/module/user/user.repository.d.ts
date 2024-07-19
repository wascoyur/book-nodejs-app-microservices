import { UserEntity } from './entities/user.entity';
import { DeepPartial, Repository, SelectQueryBuilder } from 'typeorm';
import { CheckExsistUserParams } from './user.types';
import GetUserFilterDto from './dto/get-users-filter.dto';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    save<T extends DeepPartial<UserEntity>>(entity: T): Promise<UserEntity>;
    createUser<T extends DeepPartial<UserEntity>>(entity: T): Promise<UserEntity>;
    findById(userId: string): Promise<UserEntity | undefined>;
    findAndCount(params: GetUserFilterDto): Promise<{
        items: UserEntity[];
        total: number;
    }>;
    updateUser(params: DeepPartial<UserEntity>): Promise<void>;
    deleteUser(id: string): Promise<void>;
    checkExistUser(params: CheckExsistUserParams, alias?: string): Promise<boolean>;
    qb(params: GetUserFilterDto, alias?: string): SelectQueryBuilder<UserEntity>;
    findByLogin(login: string): Promise<UserEntity | undefined>;
}
