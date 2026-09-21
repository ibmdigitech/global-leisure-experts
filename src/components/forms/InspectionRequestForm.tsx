'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Upload } from 'lucide-react';
import { services } from '@/data/services';

const inspectionRequestSchema = z.object({
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

type InspectionRequestFormData = z.infer<typeof inspectionRequestSchema>;

interface InspectionRequestFormProps {
  onSuccess?: () => void;
}

export function InspectionRequestForm({ onSuccess }: InspectionRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InspectionRequestFormData>({
    resolver: zodResolver(inspectionRequestSchema),
  });

  const onSubmit = async (data: InspectionRequestFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    setUploadedFiles([]);
    onSuccess?.();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-deep-navy mb-2">Request Received</h3>
        <p className="text-secondary-text">Your request has been received. Our technical team will review the submitted information.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-primary-text mb-2">
            Company Name <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('companyName')}
            type="text"
            id="companyName"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="Your company name"
          />
          {errors.companyName && (
            <p className="mt-1.5 text-sm text-red-600">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-primary-text mb-2">
            Contact Person <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('contactPerson')}
            type="text"
            id="contactPerson"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="Full name"
          />
          {errors.contactPerson && (
            <p className="mt-1.5 text-sm text-red-600">{errors.contactPerson.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
            Email <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-text mb-2">
            Phone / WhatsApp <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="+971 XX XXX XXXX"
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="serviceRequired" className="block text-sm font-medium text-primary-text mb-2">
            Service Required <span className="text-safety-amber">*</span>
          </label>
          <select
            {...register('serviceRequired')}
            id="serviceRequired"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="mt-1.5 text-sm text-red-600">{errors.serviceRequired.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="equipment" className="block text-sm font-medium text-primary-text mb-2">
            Equipment / Installation
          </label>
          <input
            {...register('equipment')}
            type="text"
            id="equipment"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="Describe equipment or installation type"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-primary-text mb-2">
            Location <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('location')}
            type="text"
            id="location"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
            placeholder="Location in the UAE"
          />
          {errors.location && (
            <p className="mt-1.5 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-primary-text mb-2">
            Preferred Date
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-primary-text mb-2">
            Project Description <span className="text-safety-amber">*</span>
          </label>
          <textarea
            {...register('projectDescription')}
            id="projectDescription"
            rows={4}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all resize-none"
            placeholder="Describe your inspection requirements..."
          />
          {errors.projectDescription && (
            <p className="mt-1.5 text-sm text-red-600">{errors.projectDescription.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-primary-text mb-2">
            Document / Image Upload
          </label>
          <div className="relative">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-dashed border-border px-4 py-6 cursor-pointer hover:border-technical-teal transition-colors"
            >
              <Upload className="h-5 w-5 text-secondary-text" />
              <span className="text-sm text-secondary-text">Click to upload documents or images</span>
            </label>
          </div>
          {uploadedFiles.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {uploadedFiles.map((file, i) => (
                <span key={i} className="inline-flex items-center gap-1 rounded-full bg-light px-3 py-1 text-xs text-primary-text">
                  {file.name}
                  <button
                    type="button"
                    onClick={() => setUploadedFiles(uploadedFiles.filter((_, idx) => idx !== i))}
                    className="text-secondary-text hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-technical-teal px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-industrial-blue disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}
