import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionCredentialsOptions } from 'typeorm/driver/postgres/PostgresConnectionCredentialsOptions';
export declare const databaseOptions: (config: ConfigService) => TypeOrmModuleOptions & PostgresConnectionCredentialsOptions;
