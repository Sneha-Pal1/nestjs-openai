import { Type } from 'class-transformer';
import { IsArray, IsEmpty, IsString, ValidateNested } from 'class-validator';

export class createChatCompletionRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatCompletionMessageDto)
  messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
  @IsString()
  @IsEmpty()
  role: string;

  @IsString()
  @IsEmpty()
  content: string;
}
