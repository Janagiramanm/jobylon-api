import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job, JobDocument } from './schemas/jobs.schema';
import { Model } from 'mongoose';
import axios from 'axios';


@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Job') 
      private readonly jobModel: Model<JobDocument>, 
     ) {}


      create(createJobDto: CreateJobDto) {
        return 'This action adds a new job';
      }

      async cronJobs() {
          
          const mongodb = require('mongodb');
          const MongoClient = mongodb.MongoClient;
          const connectionURl = `mongodb+srv://netiapps:wLf41EORme2t7nJS@jobylon.djpfi.mongodb.net/Jobylon?retryWrites=true&w=majority`;
          const databaseName = 'Jobylon';

          axios.get('https://feed.jobylon.com/feeds/d9e01e063e3640429e0e8b95d33d1431/?format=json')
            .then((response) => {
            
              MongoClient.connect(
                connectionURl,
                { useNewUrlParser: true },
                (error, client) => {
                  if (error) {
                    return console.log('unable to connect to database');
                  }
              
                  const db = client.db(databaseName);
                  
                  db.collection('jobs').drop();
                  const jobs = [];
                  response.data.map((data, index) => {
                    
                        db.collection('jobs').insertOne({
                          id: data.id,
                          name: data.company.name,
                          parent_id: '',
                          child_ids: [],
                          jobs: { absolute_url: data.urls.apply , 
                          data_compliance: { type: '', requires_consent: '', retention_period:'' },      
                          internal_job_id: '',
                          location: { name: ''},
                          metadata:[],
                          id: '',
                          updated_at: '', 
                          requisition_id: '',
                          title: ''
                        },               
                          raw_data: data 
                        });
                        
                        

                  });
              });
          });
        
      }

      async findAll() {
            const jobs = await this.jobModel.find().select('id name parent_id child_ids jobs').limit(100).exec();
            return {
              departments: jobs
            } 
      }


  }

  

  // async getJob(id: number){
  //   const job = await this.jobModel.findById(id).exec();
  //   return job;
  // }

  // findOne(id: number){
  //   return `This action updates a #${id} job`;
  // }

  // update(id: number, updateJobDto: UpdateJobDto) {
  //   return `This action updates a #${id} job`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} job`;
  // }
// }
