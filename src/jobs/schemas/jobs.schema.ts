import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type JobDocument = Job & Document;

@Schema()
export class Job {
  // _id?: any;

  @Prop(Number)
  id: number;

  @Prop(String)
  name: string;

  @Prop(String)
  parent_id: string;

  @Prop(String)
  child_ids:[];

  @Prop({ type: [{ absolute_url: String, 
     data_compliance: { type: String, requires_consent: Boolean, retention_period: Number }, 
     internal_job_id: Number, 
     location: { name: String},
     metadata: Array,
     id: Number,
     updated_at: { type: Date }, 
     requisition_id: Number, 
     title: String }]
   })
  jobs: Array<{
    absolute_url: string;
    data_compliance: {
      type: string;
      requires_consent: boolean;
      retention_period: number;
    };
    internal_job_id: number;
    location: {
      name: string;
    }
    metadata: [];
    id: number;
    updated_at: Date;
    requisition_id: number;
    title: string;
  }>;

  @Prop(String)
  raw_data: string;

  
}

export const JobSchema = SchemaFactory.createForClass(Job);
