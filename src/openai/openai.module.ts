import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import OpenAI from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [OpenaiController],
  imports: [ConfigModule],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => {
        return new OpenAI({
          // useFactory: (configService: ConfigService) =>
          //   new OpenAI({ apiKey: configService.getOrThrow('OPENAI_API_KEY') }),
          // inject: [ConfigService],

          baseURL: 'https://openrouter.ai/api/v1',
          apiKey: configService.get<string>('OPENROUTER_API_KEY'),
          defaultHeaders: {
            'HTTP-Referer': 'http://localhost:3000', // Or your deployed site
            // 'X-Title': 'My App', // Optional
          },
        });
      },
      inject: [ConfigService],
    },
    OpenaiService,
  ],
  exports: [OpenaiService],
})
export class OpenaiModule {}
