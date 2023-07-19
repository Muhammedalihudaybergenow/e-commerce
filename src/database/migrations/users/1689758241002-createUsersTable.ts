import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName ='users';

export class CreateUsersTable1689758241002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    isNullable: false,
                    isGenerated: true,
                    isUnique: true,
                    isPrimary:true
                },
                {
                    name: 'username',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                    isUnique:true,
                },
                {
                    name: 'phonenumber',
                    type: 'varchar',
                    length: '10',
                    isNullable: false,
                    isUnique:true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '50',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);
    }

}
