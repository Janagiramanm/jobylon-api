import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';

@Module({
  imports: [
    JobsModule,
    MongooseModule.forRoot(
      `mongodb+srv://netiapps:wLf41EORme2t7nJS@jobylon.djpfi.mongodb.net/Jobylon?retryWrites=true&w=majority`,
    ),
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
