import { UserEntity } from '../entities/user.entity';
export declare class UserDto {
    userId: string;
    login: string;
    phone: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    role: string;
    constructor(entity: Partial<UserEntity>);
}
