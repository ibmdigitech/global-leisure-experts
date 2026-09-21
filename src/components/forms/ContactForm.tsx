'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-deep-navy mb-2">Message Sent</h3>
        <p className="text-secondary-text">Thank you for your enquiry. Our team will get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">
            Name <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
            Email <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-text mb-2">
            Phone <span className="text-safety-amber">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-primary-text mb-2">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">
            Message <span className="text-safety-amber">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-technical-teal focus:ring-2 focus:ring-technical-teal/20 outline-none transition-all resize-none"
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-technical-teal px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-industrial-blue disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}


