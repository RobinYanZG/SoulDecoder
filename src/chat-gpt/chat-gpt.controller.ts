import {Controller, Get} from '@nestjs/common';
import {ChatGptService} from "./chat-gpt.service";

@Controller('chat-gpt')
export class ChatGptController {
    constructor(private readonly chatGptService: ChatGptService ) {}

    @Get('/hello')
    getHello(): string {
        return this.chatGptService.getHello();
    }
}
