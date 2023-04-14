import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import {ChatCompletionRequestMessage, CreateChatCompletionResponse, Configuration, OpenAIApi} from 'openai';

@Injectable()
export class OpenaiService {
    private readonly openAIApi: OpenAIApi;
    private readonly OPENAI_CHAT_MODEL = 'gpt-3.5-turbo';

    constructor(private configService: ConfigService) {
        const configuration = new Configuration({
            apiKey: this.configService.get('CHATGPT_API_KEY'),
            basePath: this.configService.get('CHATGPT_API_BASE_URL'),
        });

        this.openAIApi = new OpenAIApi(configuration);
    }

    async sendMessage(messages:  ChatCompletionRequestMessage[]): Promise<CreateChatCompletionResponse> {
        try {
            const completion = await this.openAIApi.createChatCompletion({
                model: this.OPENAI_CHAT_MODEL,
                messages,
            });
            console.log(completion);
            return completion.data;
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    }
}
