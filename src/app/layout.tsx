import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Global Leisure Experts LLC | Industrial Inspection & Technical Testing UAE",
    template: "%s | Global Leisure Experts LLC",
  },
  description:
    "Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.",
  keywords: [
    "industrial inspection UAE",
    "industrial installation inspection UAE",
    "technical testing UAE",
    "technical testing and analysis UAE",
    "inspection consultancy UAE",
    "industrial inspection consultancy",
    "technical inspection UAE",
    "industrial products UAE",
    "industrial trading UAE",
    "technical consultancy UAE",
  ],
  authors: [{ name: "Global Leisure Experts LLC" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://gle.ae",
    siteName: "Global Leisure Experts LLC",
    title: "Global Leisure Experts LLC | Industrial Inspection & Technical Testing UAE",
    description:
      "Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Leisure Experts LLC | Industrial Inspection & Technical Testing UAE",
    description:
      "Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-light text-primary-text">
        {children}
      </body>
    </html>
  );
}
