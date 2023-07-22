import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName = "categories"
export class CreateCategoriesTable1690020048074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    isNullable: false,
                    isPrimary:true,
                    isGenerated: true,
                    isUnique: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'parentId',
                    type: 'integer',
                    isNullable: false
                }
            ],
            foreignKeys:[
            {
                columnNames: ['parentId'],
                referencedColumnNames: ['id'],
                referencedTableName: tableName
            }
            ]
        }),true,true,true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName,true,true,true);
    }

}
