import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import {ConversationModule} from "../conversation/conversation.module";
import {UserModule} from "../user/user.module";
import {MessageModule} from "../message/message.module";

@Module({
  imports: [ConversationModule, UserModule, MessageModule],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
