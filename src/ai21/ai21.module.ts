import { Module } from '@nestjs/common';
import { AI21Controller } from './ai21.controller';
import { AI21Service } from './ai21.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AI21Controller],
  providers: [AI21Service],
})
export class AI21Module {}
