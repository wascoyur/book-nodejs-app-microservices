import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import * as process from 'process';
import { UserEntity } from '../module/user/entities/user.entity';
import migrations from '../module/database/migrations';

const ENV_FILE = '.env';
dotenv.config({ path: ENV_FILE });
export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: +process.env.DB_PORT,
  synchronize: false,
  entities: [UserEntity],
  migrations,
  migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  migrationsTableName: process.env.DATABASE_MIGRATIONS_TABLE_NAME,
});
