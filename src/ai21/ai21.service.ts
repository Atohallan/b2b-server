import { Injectable } from '@nestjs/common';
import { ChatCompletionRequestMessage } from 'openai';
import axios from 'axios';

@Injectable()
export class AI21Service {
  async createChatCompletion(messages: ChatCompletionRequestMessage[]) {
    try {
      console.log('Messages:', JSON.stringify(messages));
      const API_KEY = process.env.AI21_API_KEY;
      return axios.post(
        'https://api-stage.ai21.com/studio/v1/j2-grande-instruct/complete',
        {
          prompt: 'Write a tweet about the future of NLP',
          numResults: 1,
          maxTokens: 1000,
          temperature: 0.8,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
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
