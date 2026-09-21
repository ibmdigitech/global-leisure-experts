export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  keyAreas: string[];
  cta: string;
  ctaLink: string;
}

export const services: Service[] = [
  {
    id: 'inspection',
    number: '01',
    title: 'Industrial Installation Inspection',
    slug: 'industrial-installation-inspection',
    shortDescription:
      'Comprehensive inspection consultancy for industrial installations, equipment, and infrastructure — identifying potential concerns before they become critical.',
    fullDescription:
      'Global Leisure Experts LLC provides industrial installation inspection consultancy services, helping businesses evaluate the condition, safety, and operational readiness of their industrial equipment and facilities. Our inspection approach focuses on systematic assessment, clear documentation, and actionable technical observations.',
    icon: 'Search',
    keyAreas: [
      'Structural integrity assessment',
      'Equipment condition evaluation',
      'Safety compliance review',
      'Installation verification',
      'Operational readiness checks',
      'Documentation and reporting',
    ],
    cta: 'Explore Inspection →',
    ctaLink: '/services/industrial-installation-inspection',
  },
  {
    id: 'testing',
    number: '02',
    title: 'Technical Testing & Analysis',
    slug: 'technical-testing-analysis',
    shortDescription:
      'Professional technical testing, evaluation, and analysis services — delivering precise data to support informed engineering decisions.',
    fullDescription:
      'Our technical testing and analysis services provide businesses with the data they need to make informed decisions about their industrial assets. From material testing to performance evaluation, we deliver structured analysis and clear technical reporting.',
    icon: 'FlaskConical',
    keyAreas: [
      'Material testing and evaluation',
      'Performance analysis',
      'Technical parameter measurement',
      'Quality assessment',
      'Compliance testing',
      'Analytical reporting',
    ],
    cta: 'Explore Testing →',
    ctaLink: '/services/technical-testing-analysis',
  },
  {
    id: 'consultancy',
    number: '03',
    title: 'Inspection Consultancy',
    slug: 'inspection-consultancy',
    shortDescription:
      'Professional technical consultation supporting inspection planning, evaluation, and reporting — structured guidance for complex inspection requirements.',
    fullDescription:
      'Our inspection consultancy services support businesses in planning and managing their inspection requirements. We provide technical guidance on inspection scope, methodology, evaluation criteria, and reporting standards to help organizations maintain structured oversight of their industrial assets.',
    icon: 'ClipboardCheck',
    keyAreas: [
      'Inspection planning and scope definition',
      'Technical evaluation guidance',
      'Reporting standards consultation',
      'Risk assessment methodology',
      'Regulatory awareness support',
      'Technical documentation review',
    ],
    cta: 'Explore Consultancy →',
    ctaLink: '/services/inspection-consultancy',
  },
  {
    id: 'trading',
    number: '04',
    title: 'Industrial Trading',
    slug: 'industrial-trading',
    shortDescription:
      'Sourcing and supply of industrial products, equipment, and goods — supporting businesses with dependable procurement and trading solutions.',
    fullDescription:
      'Global Leisure Experts LLC offers industrial trading services, providing businesses with access to industrial products, equipment, and supplies. Our trading activities cover wholesale and retail channels, supporting procurement needs across diverse industrial applications.',
    icon: 'Package',
    keyAreas: [
      'Industrial equipment sourcing',
      'Technical instrument supply',
      'Safety product procurement',
      'Wholesale trading',
      'Online retail capabilities',
      'Supply chain support',
    ],
    cta: 'Explore Trading →',
    ctaLink: '/services/industrial-trading',
  },
];
