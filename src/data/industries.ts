export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'Our inspection and testing services can support oil and gas operations requiring technical assessment, equipment evaluation, and safety reviews.',
    icon: 'Flame',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description:
      'Our services can support manufacturing facilities with equipment inspection, quality testing, and operational assessment requirements.',
    icon: 'Factory',
  },
  {
    id: 'construction',
    name: 'Construction',
    description:
      'Our technical services can support construction projects requiring installation inspection, material testing, and quality evaluation.',
    icon: 'Building2',
  },
  {
    id: 'energy',
    name: 'Energy',
    description:
      'Our inspection and analysis capabilities can support energy sector operations with technical evaluation and safety assessment services.',
    icon: 'Zap',
  },
  {
    id: 'utilities',
    name: 'Utilities',
    description:
      'Our services can support utilities infrastructure with inspection consultancy, technical testing, and equipment assessment.',
    icon: 'Droplets',
  },
  {
    id: 'marine',
    name: 'Marine',
    description:
      'Our technical services can support marine operations requiring equipment inspection, testing, and compliance evaluation.',
    icon: 'Anchor',
  },
  {
    id: 'industrial-facilities',
    name: 'Industrial Facilities',
    description:
      'Our inspection and consultancy services can support industrial facility managers with comprehensive technical assessment needs.',
    icon: 'Warehouse',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description:
      'Our services can support logistics operations with equipment inspection, safety evaluation, and technical testing requirements.',
    icon: 'Truck',
  },
];
