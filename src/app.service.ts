import { Injectable } from '@nestjs/common';
import { OpenAIClient } from '@platohq/nestjs-openai';

@Injectable()
export class AppService {
  constructor(private readonly openAIClient: OpenAIClient) {}

  async createCompletion(prompt: string) {
    try {
      const { data } = await this.openAIClient.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 1000,
        temperature: 0.8,
        prompt,
      });

      return data;
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
