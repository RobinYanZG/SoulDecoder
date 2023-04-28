import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/create')
    async createUser(
        @Body('openid') openid: string,
        @Body('nickname') nickname: string,
        @Body('avatarUrl') avatarUrl: string,
    ) {
        return this.userService.createUser(openid, nickname, avatarUrl);
    }
}
