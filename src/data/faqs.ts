export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Industrial Inspection',
    question: 'What types of industrial installations can be inspected?',
    answer:
      'Our industrial installation inspection consultancy covers a wide range of equipment and infrastructure. Contact our technical team to discuss your specific inspection requirements and we will advise on the appropriate scope.',
  },
  {
    id: 'faq-2',
    category: 'Industrial Inspection',
    question: 'How do I request an inspection?',
    answer:
      'You can request an inspection through our dedicated request form. Submit your requirements, equipment details, location, and preferred timeline. Our technical team will review and respond to discuss next steps.',
  },
  {
    id: 'faq-3',
    category: 'Technical Testing',
    question: 'What testing and analysis services are available?',
    answer:
      'Our technical testing and analysis services include material testing, performance evaluation, and technical parameter measurement. Contact us to discuss your specific testing requirements.',
  },
  {
    id: 'faq-4',
    category: 'Technical Testing',
    question: 'Are testing reports provided?',
    answer:
      'Yes, our technical testing services include structured reporting. Findings and technical observations are documented and communicated clearly as part of the engagement.',
  },
  {
    id: 'faq-5',
    category: 'Inspection Consultancy',
    question: 'What does inspection consultancy involve?',
    answer:
      'Our inspection consultancy services provide technical guidance on inspection planning, scope definition, evaluation criteria, and reporting standards. We support organizations in structuring their inspection oversight.',
  },
  {
    id: 'faq-6',
    category: 'Industrial Trading',
    question: 'How can I enquire about industrial products?',
    answer:
      'You can browse our product catalogue and use the request quote or WhatsApp enquiry options on individual product pages. For general industrial trading enquiries, please use our contact form.',
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Which areas do you serve?',
    answer:
      'We provide services across the UAE. Contact us to discuss your location and requirements.',
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'How quickly will I receive a response?',
    answer:
      'We aim to respond to all enquiries promptly. Our technical team reviews each request and will contact you to discuss your requirements.',
  },
];
