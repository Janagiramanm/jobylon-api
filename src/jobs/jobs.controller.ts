import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';


@Controller('jobs')
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
    
    ) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }
  // async save(@Body() createExcludedDto: CreateExcludedDto) {
  //   const excluded = await this.excludedService.save(createExcludedDto);
  //   return {
  //     message: 'success',
  //     excluded,
  //   };
  // }

  // @Get('cron-job')
  // async getCronJobs() {
  // const jobs = await this.jobsService.cronJobs();
  
   
  //   //const cronJobs = await this.jobsService.save();
  //   return {
  //     message: 'success',
  //     jobs,
  //   };
  // }
  
  

  @Get()
  async findAll() {
    return this.jobsService.findAll();
  }


  @Get('cronJobs')
  async cronJobs() {
    const departments = await this.jobsService.cronJobs();
    return {
      message: 'success',
      departments,
    };
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.jobsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
  //   return this.jobsService.update(+id, updateJobDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jobsService.remove(+id);
  // }
}
