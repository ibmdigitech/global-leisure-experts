export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Understanding Industrial Installation Inspection',
    excerpt: 'An overview of industrial installation inspection consultancy and its role in operational safety.',
    content: `
Industrial installation inspection consultancy plays a critical role in ensuring that industrial equipment and infrastructure are installed correctly and operate safely.

## Why Installation Inspection Matters

Proper installation is the foundation of operational safety and performance. Industrial installation inspection helps identify potential concerns before they become critical issues.

## Key Areas Covered

- Structural integrity verification
- Equipment alignment and mounting
- Piping and connection integrity
- Safety system installation
- Documentation review

## Our Approach

Our technical team follows a structured inspection methodology to assess industrial installations against applicable standards and requirements.

Contact our technical team to discuss your specific installation inspection requirements.
    `,
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Industrial Inspection',
    slug: 'understanding-industrial-installation-inspection',
  },
  {
    id: 'article-2',
    title: 'Technical Testing: Methods and Applications',
    excerpt: 'Exploring common technical testing methods used in industrial assessment.',
    content: `
Technical testing and analysis provide essential data for informed engineering decisions. Understanding common testing methods helps organizations select the right approach for their needs.

## Common Testing Methods

- Material composition analysis
- Non-destructive testing
- Performance evaluation
- Dimensional verification
- Environmental testing

## Applications

Technical testing supports quality assurance, compliance verification, and operational safety across industrial sectors.

Contact our technical team to discuss your testing requirements.
    `,
    date: '2025-01-10',
    readTime: '4 min read',
    category: 'Technical Testing',
    slug: 'technical-testing-methods-and-applications',
  },
  {
    id: 'article-3',
    title: 'The Role of Inspection Consultancy',
    excerpt: 'How professional inspection consultancy supports structured technical oversight.',
    content: `
Inspection consultancy provides structured technical guidance for organizations managing complex inspection programs.

## What Inspection Consultancy Covers

- Inspection program design
- Scope definition and planning
- Evaluation criteria development
- Reporting standards and documentation
- Compliance assessment

## Benefits

Professional inspection consultancy brings structured oversight, technical clarity, and documented processes to industrial inspection programs.

Contact our technical team to discuss your inspection consultancy needs.
    `,
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Inspection Consultancy',
    slug: 'role-of-inspection-consultancy',
  },
];
