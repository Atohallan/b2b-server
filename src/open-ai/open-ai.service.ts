import { Injectable } from '@nestjs/common';
import { OpenAIClient } from '@platohq/nestjs-openai';
import {
  ChatCompletionRequestMessage,
  CreateModerationRequestInput,
} from 'openai';

@Injectable()
export class OpenAIService {
  constructor(private readonly openAIClient: OpenAIClient) {}

  async createChatCompletion(messages: ChatCompletionRequestMessage[]) {
    try {
      const { data } = await this.openAIClient.createChatCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 1000,
        temperature: 0.8,
        messages,
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

  async createModeration(input: CreateModerationRequestInput) {
    try {
      const { data } = await this.openAIClient.createModeration({
        input,
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
