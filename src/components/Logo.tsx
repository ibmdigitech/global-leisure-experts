import { company } from '@/data/company';

export function Logo({ className = 'h-10 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label={company.name}>
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="3" className="text-technical-teal" />
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" className="text-technical-teal opacity-50" />
      <path d="M22 30H38M30 22V38" stroke="currentColor" strokeWidth="3" className="text-white" strokeLinecap="round" />
      <text x="68" y="36" fill="currentColor" className="font-bold text-xl tracking-wider" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {company.shortName}
      </text>
    </svg>
  );
}

export function LogoMark({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label={company.shortName}>
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="3" className="text-technical-teal" />
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" className="text-technical-teal opacity-50" />
      <path d="M22 30H38M30 22V38" stroke="currentColor" strokeWidth="3" className="text-white" strokeLinecap="round" />
    </svg>
  );
}
