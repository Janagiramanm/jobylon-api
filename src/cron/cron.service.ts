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
    //  constructor(private httpService: HttpService) {}


  
   
   
    // constructor(private readonly jobsService: JobsService) {}
    // constructor(@InjectModel(Job.name) private jobModal: Model<JobDocument>) {}
    // http: any;

    // constructor(private httpService: HttpService) {}
  
    
    @Cron('2 * * * * *')
    handleCron() {
      
        (async () => {
            try {

              //const DATA_URL = 'https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json';
              // constructor( http: HttpService) {}
              // const resp = await firstValueFrom(this.http.get(`https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json`));
              //  return resp;
             
              

            // const newJob: Job = {
            //   firstName: userRegistrationDto.firstName,
            //   lastName: userRegistrationDto.lastName,
            //   email: userRegistrationDto.email,
            //   password: hashedPassword,
            //   userType: userRegistrationDto.userType,
            //   authorities: [],
            //   isSocialReg: false,
            //   socialRegProvider: '',
            //   mobileNumber: userRegistrationDto.mobileNumber,
            //   passwordResetCode: null,
            //   emailVerificationCode: null,
            //   isEmailVerified: false,
            //   addresses: [],
            //   socialHandles: [],
            //   profileImage: '',
            //   coverMediaList: [],
            //   galleryMediaList: [],
            //   featuredVideos: [],
            //   bio: '',
            //   activity: '',
            //   nationality: userRegistrationDto.nationality,
            //   status: 0,
            // };
        
            
            // const createdUser = new this.jobModal(newJob).save();
            // @Post()
            // create(@Body() createJobDto: CreateJobDto) {
                // return this.jobsService.create(result);
            // }

              // const DATA_URL = 'https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json';
              // const result = await axios({
              //   url: DATA_URL,
              //   method: 'GET',
              //   timeout: 3000,
              //   httpsAgent: new https.Agent({
              //     rejectUnauthorized: false,
              //   }),
              // });

              // findAll(): Observable<AxiosResponse<Cat[]>> {
              //   return this.httpService.get('http://localhost:3000/cats');
              // }
        
              // const response =   this.httpService.get('https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json').subscribe((response) => {
              //   console.log(response);
              // });
              // const response = await fetch('http://app.planetwork.in/api/jobs?bearer=20|7kY0230ijEv6ID71UEVGU3igP0PxogliGuo9iZkY')
              // const json = await response.json()
              // this.logger.debug('Data -- ' + json);

            // async (params:type) => {

            //   axios.get('https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json'})
            //   .then(response => {
            //       // If request is good...
            //       console.log(response.data);
            //    })
            //   .catch((error) => {
            //       console.log('error ' + error);
            //    });
              
            // }  

              // const result = await this.httpService.get(
              //   `https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json`                
              // );
             //console.log(result);

            } catch (error) {
              //console.log(error.response.body);
              this.logger.debug('Error -- ' + error);
            }
          })();
       
     // this.logger.debug('Called when the current second is 2');
    
    }
}



