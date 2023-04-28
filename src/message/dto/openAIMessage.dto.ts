import { IsString, IsIn, IsOptional, MaxLength, Matches } from 'class-validator';

export class OpenAIMessageDto {
    @IsString()
    @IsIn(['system', 'user', 'assistant'])
    role: string;

    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    @MaxLength(64)
    @Matches(/^[a-zA-Z0-9_]*$/)
    name?: string;
}
