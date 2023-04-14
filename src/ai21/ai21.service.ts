import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class AI21Service {
  constructor(private readonly httpService: HttpService) {}
  async createChatCompletion(messages: string): Promise<Observable<object>> {
    try {
      const API_KEY = process.env.AI21_API_KEY;
      return await lastValueFrom(
        this.httpService
          .post(
            'https://api.ai21.com/studio/v1/j2-jumbo-instruct/complete',
            {
              prompt: messages,
              numResults: 1,
              maxTokens: 500,
              temperature: 0.8,
              minTokens: 0,
              topP: 1,
              topKReturn: 0,
              frequencyPenalty: {
                scale: 1,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true,
              },
              presencePenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true,
              },
              countPenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },
          )
          .pipe(map((resp) => resp.data)),
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
