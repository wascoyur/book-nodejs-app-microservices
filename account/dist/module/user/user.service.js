"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const crypto = require("node:crypto");
const argon = require("argon2");
const user_dto_1 = require("./dto/user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        const userExist = await this.userRepository.checkExistUser({
            phone: user.phone,
            login: user.login,
        });
        if (userExist) {
            throw new common_1.ConflictException('User already Exist');
        }
        const salt = crypto.randomBytes(32);
        const hash = await argon.hash(user.password, { salt });
        await this.userRepository.createUser({
            passwordHash: hash,
            passwordSalt: salt.toString('hex'),
            ...user,
        });
    }
    async findAll(getUserFilterDto) {
        const { items: users, total } = await this.userRepository.findAndCount(getUserFilterDto);
        const dots = users.map((user) => {
            return new user_dto_1.UserDto(user);
        });
        return { items: dots, total };
    }
    findOne(id) {
        console.log(`This action returns a #${id} user`);
        return this.userRepository.findById(id);
    }
    update(id, updateUserDto) {
        console.log(`This action updates a #${id} user`);
        return this.userRepository.updateUser({ userId: id, ...updateUserDto });
    }
    remove(id) {
        return this.userRepository.deleteUser(id);
    }
    async verification(obj) {
        const { login, password } = obj;
        const user = await this.userRepository.findByLogin(login);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return await argon.verify(user.passwordHash, password);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map