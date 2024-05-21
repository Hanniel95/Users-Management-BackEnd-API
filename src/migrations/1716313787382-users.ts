import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1716313787382 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` 
              CREATE TABLE \`users\`  (
                \`id\` INT PRIMARY KEY AUTO_INCREMENT,
                \`first_name\` VARCHAR(255) NOT NULL,
                \`last_name\` VARCHAR(255) NOT NULL,
                \`email\` VARCHAR(255) NOT NULL,
                \`gender\` ENUM('M','F') NOT NULL,
                \`createdAt\` TIMESTAMP NOT NULL DEFAULT now(),
                \`updatedAt\` TIMESTAMP NOT NULL DEFAULT now()
              )
              `
    ),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }
}
