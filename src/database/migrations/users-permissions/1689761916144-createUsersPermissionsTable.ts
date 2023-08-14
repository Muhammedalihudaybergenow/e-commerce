import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName = "users_permissions";
const permissionTableName = 'permissions';
const userTableName = 'users';
export class CreateUsersPermissionsTable1689761916144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns:[
                {
                    name: 'permission_id',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false
                }
            ],
            foreignKeys:[
                {
                    columnNames: ['permission_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName:permissionTableName
                },
                {
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: userTableName
                }
            ]
        }),true,true,true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName,true,true,true)
    }

}
