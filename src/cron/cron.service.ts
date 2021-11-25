import { Injectable, Logger  } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Cron } from '@nestjs/schedule';
// import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';


// import { JobsService } from '../jobs/jobs.service';
// import { CreateJobDto } from '../jobs/dto/create-job.dto';
// import { Job, JobDocument } from '../jobs/schemas/jobs.schema';



// import * as https from 'https';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);
    
    @Cron('2 * * * * *')
    handleCron() {
      
        (async () => {
            try {

              console.log('call cron job api');

            } catch (error) {
              //console.log(error.response.body);
              this.logger.debug('Error -- ' + error);
            }
          })();
     }
}



