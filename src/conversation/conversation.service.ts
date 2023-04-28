import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Conversation} from "./conversation.entity";
import {Repository} from "typeorm";

@Injectable()
export class ConversationService {
    constructor(
        @InjectRepository(Conversation)
        private conversationRepository: Repository<Conversation>,
    ) {}

    async getConversationsByUserId(userId: number): Promise<Conversation[]> {
        return await this.conversationRepository.find({ where: { userId } });
    }

    async getConversationById(id: number): Promise<Conversation> {
        return await this.conversationRepository.findOne({ where: { id } });
    }

    async createConversation(userId: number): Promise<Conversation> {
        const newConversation = this.conversationRepository.create({ userId });
        await this.conversationRepository.save(newConversation);
        return newConversation;
    }
}
