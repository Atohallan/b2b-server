import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCompletionResponse } from 'openai';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  createCompletion(
    @Body('input') input: string,
  ): Promise<CreateCompletionResponse> {
    return this.appService.createCompletion(input);
  }
}
