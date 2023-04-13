import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatGptService {
    getHello(): string {
        return 'Hello Chat!';
    }
}
