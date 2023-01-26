import { Module } from '@nestjs/common';
import { FirstAppController } from './first-app.controller';

@Module({
  controllers: [FirstAppController]
})
export class FirstAppModule {}
