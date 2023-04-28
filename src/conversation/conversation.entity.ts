import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Message } from '../message/message.entity';

@Entity('conversations')
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.conversations)
    user: User;

    @OneToMany(() => Message, (message) => message.conversation)
    messages: Message[];
}
