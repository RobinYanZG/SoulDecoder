import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule],
  controllers: [OpenaiController],
  providers: [OpenaiService]
})
export class OpenaiModule {}
