import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(openid: string, nickname: string, avatarUrl: string): Promise<User> {
        const newUser = this.userRepository.create({ openid, nickname, avatarUrl });
        await this.userRepository.save(newUser);
        return newUser;
    }

    async getUserById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id } });
    }
}
