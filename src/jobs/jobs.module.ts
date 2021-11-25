import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobSchema } from './jobs.model';


@Module({
  imports: [
        MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }]),
  ],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
