import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './open-ai/open-ai.module';
import { OpenAIModule as OpenAIConfigModule } from '@platohq/nestjs-openai/dist/openai.module';
import { AI21Module } from './ai21/ai21.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    OpenAIConfigModule.register({
      apiKey: process.env.OPENAI_API_KEY,
    }),
    OpenAIModule,
    AI21Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
