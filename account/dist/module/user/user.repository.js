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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserRepository = class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async save(entity) {
        return this.userRepository.save(entity);
    }
    async createUser(entity) {
        return this.userRepository.save(entity);
    }
    async findById(userId) {
        return this.userRepository.findOneBy({ userId });
    }
    async findAndCount(params) {
        const [items, total] = await this.qb(params).getManyAndCount();
        return { items, total };
    }
    async updateUser(params) {
        await this.userRepository.update({ userId: params.userId }, params);
    }
    async deleteUser(id) {
        await this.userRepository.delete({ userId: id });
    }
    async checkExistUser(params, alias = 'user') {
        const query = this.userRepository.createQueryBuilder(alias);
        query.where('user.login= :login', { login: params.login });
        query.orWhere('user.phone=:phone', { phone: params.phone });
        const result = await query.getOne();
        return !!result;
    }
    qb(params, alias = 'user') {
        const query = this.userRepository.createQueryBuilder(alias);
        if (params?.userIds?.length) {
            query.andWhere(`${alias}.userId in (:...userIds)`, {
                userIds: params.userIds,
            });
        }
        if (params?.phones?.length) {
            query.andWhere(`${alias}.phone in (:...userIds)`, {
                phones: params.phones,
            });
        }
        if (params.take) {
            query.take(params.take);
        }
        if (params.skip) {
            query.skip(params.skip);
        }
        return query;
    }
    async findByLogin(login) {
        const attr = { login };
        return this.userRepository.findOneBy(attr);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=user.repository.js.map