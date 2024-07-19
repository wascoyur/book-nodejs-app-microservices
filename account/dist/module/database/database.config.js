"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseOptions = void 0;
const migrations_1 = require("./migrations");
const databaseOptions = (config) => ({
    type: config.get('DB_TYPE'),
    host: config.get('DB_HOST'),
    port: Number(config.get('DB_PORT')),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_DATABASE'),
    logging: config.get('DB_LOGGING') == true,
    synchronize: false,
    migrationsRun: config.get('DB_MIGRATIONS_RUN') == true,
    migrationsTableName: config.get('DB_MIGRATIONS_TABLE_NAME'),
    migrations: migrations_1.default,
    autoLoadEntities: true,
});
exports.databaseOptions = databaseOptions;
//# sourceMappingURL=database.config.js.map