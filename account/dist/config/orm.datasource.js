"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const process = require("process");
const migrations_1 = require("../module/database/migrations");
const user_entity_1 = require("../module/user/entities/user.entity");
const ENV_FILE = '.env';
dotenv.config({ path: ENV_FILE });
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: +process.env.DB_PORT,
    synchronize: false,
    entities: [user_entity_1.UserEntity],
    migrations: migrations_1.default,
    migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
    migrationsTableName: process.env.DATABASE_MIGRATIONS_TABLE_NAME,
});
//# sourceMappingURL=orm.datasource.js.map