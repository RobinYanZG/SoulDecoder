import {Body, Controller, Post} from '@nestjs/common';
import {OpenaiService} from "./openai.service";
import {CreateChatCompletionResponse} from "openai";

@Controller('openai')
export class OpenaiController {

    constructor(private openaiService: OpenaiService) {}

    @Post('/health')
    async postHello(@Body() {message}: {message: string}): Promise<string> {
        let res: CreateChatCompletionResponse;
        res = await this.openaiService.sendMessage([{role: "user", content: message}]);
        console.log(res);
        return res.choices[0].message.content;
    }
}
