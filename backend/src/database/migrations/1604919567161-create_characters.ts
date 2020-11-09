import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCharacters1604919567161 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'characters',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },

        {
          name: 'character',
          type: 'varchar',
        },

        {
          name: 'species',
          type: 'varchar',
        },

        {
          name: 'occupation',
          type: 'boolean'
        },

        {
          name: 'power',
          type: 'varchar',
        },


        {
          name: 'affiliation',
          type: 'varchar',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('characters');
  }

}
