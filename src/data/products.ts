// =============================================================================
// SAMPLE PRODUCT DATA — For UI demonstration only
// Replace with actual product data when available
// =============================================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  technicalOverview: string;
  specifications: Record<string, string>;
  applications: string[];
  isSample: boolean;
}

export const productCategories = [
  'Industrial Equipment',
  'Technical Instruments',
  'Testing Equipment',
  'Safety Products',
  'Industrial Components',
  'Engineering Supplies',
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products: Product[] = [
  {
    id: 'sample-1',
    slug: 'industrial-pressure-gauge',
    name: 'Industrial Pressure Gauge',
    category: 'Technical Instruments',
    shortDescription: 'High-precision pressure measurement instrument for industrial applications.',
    technicalOverview:
      'Sample product listing for UI demonstration. This represents the type of industrial products available through our trading services. Contact us for actual product availability and specifications.',
    specifications: {
      'Measurement Range': '0–600 bar',
      Accuracy: '±0.5% FS',
      'Connection Type': '½" NPT',
      'Housing Material': 'Stainless Steel 316',
      'Operating Temperature': '-20°C to +60°C',
    },
    applications: ['Pipeline monitoring', 'Process control', 'Equipment testing'],
    isSample: true,
  },
  {
    id: 'sample-2',
    slug: 'ultrasonic-thickness-gauge',
    name: 'Ultrasonic Thickness Gauge',
    category: 'Testing Equipment',
    shortDescription: 'Non-destructive testing instrument for material thickness measurement.',
    technicalOverview:
      'Sample product listing for UI demonstration. This represents the type of testing equipment available through our trading services.',
    specifications: {
      Range: '0.65–500mm',
      Resolution: '0.01mm',
      Display: 'Digital LCD',
      Battery: 'Rechargeable Li-Ion',
      Certification: 'Contact for details',
    },
    applications: ['Corrosion monitoring', 'Wall thickness measurement', 'Quality inspection'],
    isSample: true,
  },
  {
    id: 'sample-3',
    slug: 'safety-harness-system',
    name: 'Industrial Safety Harness System',
    category: 'Safety Products',
    shortDescription: 'Full-body safety harness system for industrial inspection work at height.',
    technicalOverview:
      'Sample product listing for UI demonstration. This represents the type of safety products available through our trading services.',
    specifications: {
      'Weight Capacity': '140 kg',
      Material: 'Polyester webbing',
      'Number of D-Rings': '5',
      'Chest Strap': 'Quick-connect buckle',
      Compliance: 'Contact for details',
    },
    applications: ['Height work inspection', 'Industrial maintenance', 'Construction safety'],
    isSample: true,
  },
  {
    id: 'sample-4',
    slug: 'portable-hardness-tester',
    name: 'Portable Hardness Tester',
    category: 'Testing Equipment',
    shortDescription: 'Portable digital hardness testing device for field inspections.',
    technicalOverview:
      'Sample product listing for UI demonstration. Contact us for actual product availability and pricing.',
    specifications: {
      'Test Method': 'Leeb rebound',
      'Hardness Scales': 'HRC, HRB, HB, HV, HS',
      Accuracy: '±0.8% (HLD)',
      'Data Storage': '600 groups',
      Interface: 'USB / Bluetooth',
    },
    applications: ['Field inspection', 'Material verification', 'Quality control'],
    isSample: true,
  },
  {
    id: 'sample-5',
    slug: 'industrial-borescope',
    name: 'Industrial Video Borescope',
    category: 'Technical Instruments',
    shortDescription: 'Articulating video borescope for internal inspection of equipment and structures.',
    technicalOverview:
      'Sample product listing for UI demonstration. This represents the type of inspection instruments available through our trading services.',
    specifications: {
      'Probe Diameter': '6.0mm',
      'Probe Length': '3.0m',
      Articulation: '360° all-way',
      Resolution: '1280×720 HD',
      'Light Source': 'LED',
    },
    applications: ['Internal equipment inspection', 'Weld inspection', 'Cavity examination'],
    isSample: true,
  },
  {
    id: 'sample-6',
    slug: 'calibration-weight-set',
    name: 'Precision Calibration Weight Set',
    category: 'Engineering Supplies',
    shortDescription: 'Certified precision weight set for instrument calibration and verification.',
    technicalOverview:
      'Sample product listing for UI demonstration. Contact us for actual product specifications and certifications.',
    specifications: {
      Class: 'E2 / F1',
      Range: '1mg – 5kg',
      Material: 'Stainless Steel',
      Case: 'Wooden presentation case',
      Certificate: 'Contact for details',
    },
    applications: ['Instrument calibration', 'Laboratory use', 'Quality assurance'],
    isSample: true,
  },
];
