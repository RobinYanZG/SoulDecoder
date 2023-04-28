import {Injectable, OnModuleInit} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatGptService implements OnModuleInit{
    private readonly options: any;
    private chatGPTAPI: any;

    async onModuleInit() {
        const {ChatGPTAPI} = await import('chatgpt');
        this.chatGPTAPI = new ChatGPTAPI(this.options);
    }

    constructor(private configService: ConfigService) {
        this.options = {
            apiKey: this.configService.get<string>('CHATGPT_API_KEY'),
            apiBaseUrl: this.configService.get<string>('CHATGPT_API_BASE_URL'),
        }
    }

    async getHello(): Promise<string> {

        // const res = await this.chatGPTAPI.sendMessage('我的名字叫什么', {
        //     parentMessageId: 'chatcmpl-79QNCmMZSNZVVtvfcUZbkrMi9tQaM'
        // })
        // console.log(res);
        // console.log(res.detail.choices[0]);
        let res = await this.chatGPTAPI.sendMessage('我叫robin, 是一个it工程师')
        console.log(res)

// send a follow-up
        res = await this.chatGPTAPI.sendMessage('你觉得我擅长什么？', {
            parentMessageId: res.id
        })
        console.log(res)

// send another follow-up
        res = await this.chatGPTAPI.sendMessage('我的名字好听吗？', {
            parentMessageId: res.id
        })
        console.log(res)

        return res.text;
    }
}
