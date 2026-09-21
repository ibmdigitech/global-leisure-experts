import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Global Leisure Experts LLC',
    short_name: 'GLE',
    description:
      'Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071a2b',
    theme_color: '#00a6a6',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
