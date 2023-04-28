import {Body, Controller, Post} from '@nestjs/common';
import {ConversationService} from "../conversation/conversation.service";
import {MessageService} from "../message/message.service";
import {UserService} from "../user/user.service";

@Controller('chat')
export class ChatController {
    constructor(
        private conversationService: ConversationService,
        private userService: UserService,
        private messageService: MessageService,
    ) {
    }
    @Post('/getConversation')
    async getConversation(
        @Body('userId') userId: number
    ) {
        return this.conversationService.getConversationsByUserId(userId);
    }

    @Post('/getHistoryMessages')
    async getHistoryMessages(
        @Body('userId') userId: number
    ) {
        const user = await this.userService.getUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const conversations = await this.conversationService.getConversationsByUserId(userId);
        let conversation;
        if (!Array.isArray(conversations) || conversations.length === 0) {
            console.log('Conversation not found, create New Conversation');
            conversation = this.conversationService.createConversation(userId);
        } else {
            conversation = conversations[0];
        }
        return this.messageService.getMessagesByConversationId(conversation.id);
    }
}
