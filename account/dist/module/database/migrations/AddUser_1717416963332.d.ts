import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUser_1717416963332 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
