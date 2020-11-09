import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEvents1604919600615 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'events',
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
          name: 'title',
          type: 'varchar',
        },

        {
          name: 'description',
          type: 'text',
        },


        {
          name: 'character_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'EventsCharacter',
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
    await queryRunner.dropTable('events');
  }

}
