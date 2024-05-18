import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserEntity1716054961442 implements MigrationInterface {
  name = 'AddUserEntity1716054961442';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying(20) NOT NULL, "login" character varying(20) NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "passwordHash" character varying NOT NULL, "passwordSalt" character varying NOT NULL, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id")); COMMENT ON COLUMN "user"."user_id" IS 'User identity'; COMMENT ON COLUMN "user"."phone" IS 'User phone'; COMMENT ON COLUMN "user"."login" IS 'User login'; COMMENT ON COLUMN "user"."firstName" IS 'User name'; COMMENT ON COLUMN "user"."lastName" IS 'User last name'; COMMENT ON COLUMN "user"."passwordHash" IS 'password hash'; COMMENT ON COLUMN "user"."passwordSalt" IS 'password salt'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
