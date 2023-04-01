import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from './open-ai.service';
import {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
  CreateModerationRequestInput,
  CreateModerationResponse,
} from 'openai';

@Controller('api/open-ai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post('generate')
  createCompletion(
    @Body('input') input: ChatCompletionRequestMessage[],
  ): Promise<CreateChatCompletionResponse> {
    return this.openAIService.createChatCompletion(input);
  }

  @Post('moderate')
  createModeration(
    @Body('input') input: CreateModerationRequestInput,
  ): Promise<CreateModerationResponse> {
    return this.openAIService.createModeration(input);
  }
}
