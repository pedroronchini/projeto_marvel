import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSeries1604919612226 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'series',
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
          name: 'genre',
          type: 'varchar',
        },

        {
          name: 'status',
          type: 'varchar',
        },

        {
          name: 'character_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'SeriesCharacter',
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
    await queryRunner.dropTable('series');
  }

}
