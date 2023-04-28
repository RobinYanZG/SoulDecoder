import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import { Conversation } from '../conversation/conversation.entity';

@Entity('messages')
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'conversation_id' })
    conversationId: number;

    @Column({ name: 'message_type' })
    messageType: string;

    @Column()
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => Conversation, (conversation) => conversation.messages)
    conversation: Conversation;
}
