export const company = {
  name: 'Global Leisure Experts LLC',
  shortName: 'GLE',
  descriptor: 'Industrial Inspection • Technical Testing • Consultancy • Trading',
  heroHeadline: 'Engineering Confidence Through Inspection & Technical Expertise',
  heroDescription:
    'Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.',
  primaryCTA: 'Request an Inspection',
  secondaryCTA: 'Talk to Our Technical Team',
  copyright: `© ${new Date().getFullYear()} Global Leisure Experts LLC. All rights reserved.`,
  location: 'United Arab Emirates',
} as const;

export const licensedActivities = [
  {
    id: 1,
    name: 'Industrial installations inspection consultancy',
    arabic: 'استشارات فحص المنشآت الصناعية',
    code: '3320.08',
  },
  {
    id: 2,
    name: 'Wholesale of a variety of goods without any particular specialization',
    arabic: 'البيع بالجملة لطائفة من السلع دون تخصص معين',
    code: '4690.01',
  },
  {
    id: 3,
    name: 'Retail sale of any kind of product over the internet',
    arabic: 'بيع أي نوع من أنواع المنتجات بالتجزئة عن طريق الإنترنت',
    code: '4791.02',
  },
  {
    id: 4,
    name: 'Technical testing and analysis',
    arabic: 'الاختبارات والتحاليل التقنية',
    code: '7120',
  },
] as const;

export const contactInfo = {
  phone: process.env.NEXT_PUBLIC_PHONE || '+971 XX XXX XXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@gle.ae',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
} as const;
