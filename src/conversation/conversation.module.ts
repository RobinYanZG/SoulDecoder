import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Conversation} from "./conversation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  providers: [ConversationService],
    exports: [ConversationService]
})
export class ConversationModule {}
