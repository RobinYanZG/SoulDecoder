import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';
import { UserModule } from './user/user.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { CommonService } from './common/common.service';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: 'config.env',
      }),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'soulDecoder',
          password: 'soulDecoder',
          database: 'soulDecoder',
          synchronize: true,
          autoLoadEntities: true,
          "entities": ["src/**/*.entity.js"],
          "migrations": ["src/migrations/*.js"]
      }),
      ChatGptModule,
      OpenaiModule,
      UserModule,
      ConversationModule,
      MessageModule,
      ChatModule
  ],
  controllers: [AppController],
  providers: [AppService, CommonService],
})
export class AppModule {}
