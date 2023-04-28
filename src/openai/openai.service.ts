import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {ChatCompletionRequestMessage, CreateChatCompletionResponse, Configuration, OpenAIApi} from 'openai';

const fakeResponse: CreateChatCompletionResponse = {
    "id": "chatcmpl-78osjPqK2OtfWzIWMZMEOIOtiVHq2",
    "object": "chat.completion",
    "created": 1682336569,
    "model": "gpt-3.5-turbo-0301",
    "usage": {
        "prompt_tokens": 10,
        "completion_tokens": 43,
        "total_tokens": 53
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "As an AI language model, I do not have a physical world to live in, but I am programmed to understand and communicate with humans through a virtual world. So, Hello! How may I assist you today?"
            },
            "finish_reason": "stop",
            "index": 0
        }
    ]
}

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
            // const completion = await this.openAIApi.createChatCompletion({
            //     model: this.OPENAI_CHAT_MODEL,
            //     messages,
            // });
            // console.log(completion);
            // return completion.data;
            return fakeResponse;
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
