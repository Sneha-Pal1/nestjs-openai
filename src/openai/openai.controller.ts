import { Body, Controller, Post } from '@nestjs/common';
import { createChatCompletionRequest } from './dto/create-chat-completion.request';

@Controller('openai')
export class OpenaiController {
  @Post('chatCompletion')
  async createChatCompletion(@Body() body: createChatCompletionRequest) {}
}
