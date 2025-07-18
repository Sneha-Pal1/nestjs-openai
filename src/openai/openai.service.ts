import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';

@Injectable()
export class OpenaiService {
  constructor(private readonly openai: OpenAI) {}

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionMessageParam[],
      model: 'deepseek/deepseek-r1:free',
    });
  }
}
