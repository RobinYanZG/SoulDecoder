import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ChatGptModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
