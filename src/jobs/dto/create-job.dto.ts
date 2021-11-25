export class CreateJobDto {
  
  id: number;
  name: string;
  parent_id: string;
  child_ids:[];
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
  raw_data: string; 
}
