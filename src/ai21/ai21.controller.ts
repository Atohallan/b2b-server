import { Controller, Post, Body } from '@nestjs/common';
import { AI21Service } from './ai21.service';
import { ChatCompletionRequestMessage } from 'openai';
import { Observable } from 'rxjs';

@Controller('api/ai21')
export class AI21Controller {
  constructor(private readonly ai21Service: AI21Service) {}

  @Post('generate')
  createCompletion(
    @Body('input') input: ChatCompletionRequestMessage[],
  ): Promise<Observable<object>> {
    return this.ai21Service.createChatCompletion(input);
  }
}
