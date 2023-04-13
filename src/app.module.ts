import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
      ConfigModule.register({ folder: './config' }),
      ChatGptModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
