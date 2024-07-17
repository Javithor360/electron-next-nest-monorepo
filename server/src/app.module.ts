import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule], // Let us use .env variables into our app
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
