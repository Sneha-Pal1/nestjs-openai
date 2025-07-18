import { config } from 'dotenv';
import OpenAI from 'openai';

config(); // Load .env

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000', // or your real site URL
  },
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'deepseek/deepseek-r1:free',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });

  console.log(completion.choices[0].message.content);
}

main().catch(console.error);
