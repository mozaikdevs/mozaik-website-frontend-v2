import { Client } from './client';

export interface Project {
  _id: string;
  name: string;
  clientId: Client;
  type: string;
  description: string;
  streetAddress: string;
  city: string;
  areaSize: number;
  areaUnit: string;
  images: string[];
  thumbnailBefore: string;
  thumbnailAfter: string;
  googleDriveDataLink: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
}
