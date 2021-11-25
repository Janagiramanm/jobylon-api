import { Job } from '../schemas/jobs.schema';

export interface JobInterface {
  _id?: string;
  title: string;
  overview: string;
  activity: string;
  levels: string;
  currency: string;
  priceLocal: number;
  priceOutsider: number;
  totalSlots: number;
  influencer: {
    _id?: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
  amenities: Array<{
    _id?: string;
    title: string;
    description: string;
    iconUrl: string;
  }>;
  excluded: Array<{
    _id?: string;
    title: string;
    description: string;    
  }>;
  aboutTheExperience: string;
  additionalInformation: Array<{
    title: string;
    description: string;
  }>;
  
  
}
