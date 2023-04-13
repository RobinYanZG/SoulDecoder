import {Injectable, OnModuleInit} from '@nestjs/common';
import {ConfigService} from "../config/config.service";

@Injectable()
export class ChatGptService implements OnModuleInit{
    private readonly options: any;
    private chatGPTAPI: any;

    async onModuleInit() {
        const chatGPT = await import('chatgpt');
        this.chatGPTAPI = new chatGPT.ChatGPTAPI(this.options);
    }

    constructor(private configService: ConfigService) {
        this.options = {
            apiKey: this.configService.get('CHATGPT_API_KEY')
        }
    }

    async getHello(): Promise<string> {

        const res = await this.chatGPTAPI.sendMessage('Hello!')
        console.log(res);
        return res.text;
    }
}
