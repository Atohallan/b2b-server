import { Module } from '@nestjs/common';
import { AI21Controller } from './ai21.controller';
import { AI21Service } from './ai21.service';

@Module({
  imports: [],
  controllers: [AI21Controller],
  providers: [AI21Service],
})
export class AI21Module {}
