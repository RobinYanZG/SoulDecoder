import {Controller, Post} from '@nestjs/common';
import {OpenaiService} from "./openai.service";

@Controller('openai')
export class OpenaiController {

    constructor(private openaiService: OpenaiService) {}

    @Post('/health')
    postHello() {
        return this.openaiService.sendMessage([{role: "user", content: "Hello world"}]);
    }
}
