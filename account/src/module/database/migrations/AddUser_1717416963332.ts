import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUser_1717416963332 implements MigrationInterface {
  name = 'AddUser_1717416963332';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying(20) NOT NULL, "login" character varying(20) NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "passwordHash" character varying NOT NULL, "passwordSalt" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'USER', CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id")); COMMENT ON COLUMN "user"."user_id" IS 'User identity'; COMMENT ON COLUMN "user"."phone" IS 'User phone'; COMMENT ON COLUMN "user"."login" IS 'User login'; COMMENT ON COLUMN "user"."firstName" IS 'User name'; COMMENT ON COLUMN "user"."lastName" IS 'User last name'; COMMENT ON COLUMN "user"."passwordHash" IS 'password hash'; COMMENT ON COLUMN "user"."passwordSalt" IS 'password salt'; COMMENT ON COLUMN "user"."role" IS 'user role'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
