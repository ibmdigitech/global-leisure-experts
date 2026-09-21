import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const inspectionRequestSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  serviceRequired: z.string().min(1, 'Please select a service'),
  equipment: z.string().optional(),
  location: z.string().min(2, 'Location is required'),
  preferredDate: z.string().optional(),
  projectDescription: z.string().min(10, 'Please provide at least 10 characters'),
});

export const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  company: z.string().optional(),
  productInterest: z.string().min(1, 'Please select a product'),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type InspectionRequestFormData = z.infer<typeof inspectionRequestSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
