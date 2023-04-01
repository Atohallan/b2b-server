import { Injectable } from '@nestjs/common';
import { ChatCompletionRequestMessage } from 'openai';

@Injectable()
export class AI21Service {
  async createChatCompletion(messages: ChatCompletionRequestMessage[]) {
    try {
      console.log('Messages:', JSON.stringify(messages));
      const API_KEY = process.env.AI21_API_KEY;
      const response = await fetch(
        'https://api-stage.ai21.com/studio/v1/j2-grande-instruct/complete',
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: 'Write a tweet about the future of NLP',
            numResults: 1,
            maxTokens: 50,
            temperature: 0.8,
            topKReturn: 0,
            topP: 1,
            countPenalty: {
              scale: 0,
              applyToNumbers: false,
              applyToPunctuations: false,
              applyToStopwords: false,
              applyToWhitespaces: false,
              applyToEmojis: false,
            },
            frequencyPenalty: {
              scale: 0,
              applyToNumbers: false,
              applyToPunctuations: false,
              applyToStopwords: false,
              applyToWhitespaces: false,
              applyToEmojis: false,
            },
            presencePenalty: {
              scale: 0,
              applyToNumbers: false,
              applyToPunctuations: false,
              applyToStopwords: false,
              applyToWhitespaces: false,
              applyToEmojis: false,
            },
            stopSequences: ['##'],
          }),
          method: 'POST',
        },
      );
      return await response.json();
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
