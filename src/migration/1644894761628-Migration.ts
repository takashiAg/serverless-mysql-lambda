import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1644894761628 implements MigrationInterface {
  name = "Migration1644894761628";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
