import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createComics1604919587618 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'comics',
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
          name: 'name',
          type: 'varchar',
        },

        {
          name: 'language',
          type: 'varchar',
        },

        {
          name: 'publishing',
          type: 'varchar',
        },

        {
          name: 'launch',
          type: 'varchar',
        },

        {
          name: 'finish',
          type: 'varchar',
        },

        {
          name: 'editions',
          type: 'decimal',
        },


        {
          name: 'character_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'ComicsCharacter',
          columnNames: ['character_id'],
          referencedTableName: 'characters',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comics');
  }

}
