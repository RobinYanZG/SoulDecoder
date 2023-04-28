import { MigrationInterface, QueryRunner } from "typeorm"

export class InitDb1682408097540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                openid VARCHAR(255) UNIQUE NOT NULL,
                nickname VARCHAR(255),
                avatar_url VARCHAR(512),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE conversations (
                id SERIAL PRIMARY KEY,
                user_id INTEGER,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );
            CREATE TABLE messages (
                id SERIAL PRIMARY KEY,
                conversation_id INTEGER,
                message_type VARCHAR(10) NOT NULL,
                content TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (conversation_id) REFERENCES conversations(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE messages;
            DROP TABLE conversations;
            DROP TABLE users;
        `);
    }

}
