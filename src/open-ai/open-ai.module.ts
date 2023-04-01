import { Module } from '@nestjs/common';
import { OpenAIController } from './open-ai.controller';
import { OpenAIService } from './open-ai.service';

@Module({
  imports: [],
  controllers: [OpenAIController],
  providers: [OpenAIService],
})
export class OpenAIModule {}
