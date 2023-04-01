import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './open-ai/open-ai.module';
import { OpenAIModule as OpenAIConfigModule } from '@platohq/nestjs-openai/dist/openai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    OpenAIConfigModule.register({
      apiKey: process.env.OPENAI_API_KEY,
    }),
    OpenAIModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
