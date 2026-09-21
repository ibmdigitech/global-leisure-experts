export const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNavigation = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Industrial Installation Inspection', href: '/services/industrial-installation-inspection' },
    { label: 'Technical Testing & Analysis', href: '/services/technical-testing-analysis' },
    { label: 'Inspection Consultancy', href: '/services/inspection-consultancy' },
    { label: 'Industrial Trading', href: '/services/industrial-trading' },
  ],
  resources: [
    { label: 'Company Profile', href: '/resources/company-profile' },
    { label: 'Articles', href: '/resources/articles' },
    { label: 'FAQ', href: '/resources/faq' },
  ],
};
