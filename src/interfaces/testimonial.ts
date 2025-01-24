import { Client } from "./client";

export interface Testimonial {
    _id: string;
    clientId: Client;
    name: string;
    employeePosition: string;
    content: string;
    attachment: string;
    priority: number;
    createdAt: string;
    updatedAt: string;
}
