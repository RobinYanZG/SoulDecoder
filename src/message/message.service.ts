import { Injectable } from '@nestjs/common';
import {Message} from "./message.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {OpenAIMessageDto} from "./dto/openAIMessage.dto";

interface IMapMessageToOpenAIMessage {
    (message: Message[]): OpenAIMessageDto[];
}

const mapMessageToOpenAIMessage: IMapMessageToOpenAIMessage = (message: Message[]) => message.map((message) => ({
    role: message.messageType,
    content: message.content,
    name: message.conversation.user.nickname,
}));

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
    ) {}

    async getMessagesByConversationId(conversationId: number): Promise<OpenAIMessageDto[]> {
        const messages = await this.messageRepository.find({ where: { conversationId } });
        return mapMessageToOpenAIMessage(messages);
    }
}
