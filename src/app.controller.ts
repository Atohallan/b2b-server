import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
  CreateModerationRequestInput,
  CreateModerationResponse,
} from 'openai';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  createCompletion(
    @Body('input') input: ChatCompletionRequestMessage[],
  ): Promise<CreateChatCompletionResponse> {
    return this.appService.createChatCompletion(input);
  }

  @Post('moderate')
  createModeration(
    @Body('input') input: CreateModerationRequestInput,
  ): Promise<CreateModerationResponse> {
    return this.appService.createModeration(input);
  }
}
