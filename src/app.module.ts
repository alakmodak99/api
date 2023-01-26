import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstAppModule } from './modules/first-app/first-app.module';

@Module({
  imports: [FirstAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// nest g co modules/firstApp /  |---------> For generating controllers
//nest g mo modules/firstApp     |----------> For generating new modules
//nest new <Application Name>    |----------> To create a new nest App