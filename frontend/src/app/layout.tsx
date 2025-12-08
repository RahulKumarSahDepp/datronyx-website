import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// font setup 
const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

//  metadata 
export const metadata: Metadata = {
  metadataBase: new URL("https://www.datronyx.com"),
  title: {
    default: "Datronyx | Data Analytics, Data Engineering & AI Solutions",
    template: "%s | Datronyx"
  },
  description:
    "Datronyx transforms raw data into intelligent systems. We offer advanced data analytics, data engineering, predictive modeling, AI development, and intelligence layers built for scale.",
  keywords: [
    "Datronyx",
    "data analytics services",
    "data engineering pipelines",
    "AI solutions",
    "machine learning consulting",
    "business intelligence dashboards",
    "predictive modeling experts",
    "data science company",
    "AI consulting firm",
    "enterprise data solutions",
  ],
  openGraph: {
    title: "Datronyx | Data Analytics, Data Engineering & AI Solutions",
    description: 
      "Datronyx transforms raw data into intelligent systems. We offer advanced data analytics, data engineering, predictive modeling, AI development, and intelligence layers built for scale.",
    url: "https://datronyx.com",
    siteName:  "Datronyx",
    images: [
      {
        url: "./public/Datronyx_Logo.png", 
        width: 1200,
        height: 630,
        alt: "Datronyx – AI, ML & Data Science"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Datronyx – AI, ML & Data Science",
    description:
      "Datronyx transforms raw data into intelligent systems. We offer advanced data analytics, data engineering, predictive modeling, AI development, and intelligence layers built for scale.",
    images: ["/og-image.png"]
  },
  authors: [{ name: "Datronyx Team" }],
  creator: "Datronyx",
  publisher: "Datronyx",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en">
      <body className={`${font.className} bg-primary text-light flex flex-col min-h-screen`}>
        
        <Navbar />

        {/*  GLOBAL JSON-LD  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Datronyx",
              url: "https://datronyx.com",
              logo: "https://datronyx.com/Datronyx_Logo.png",
              description:
                "Datronyx provides enterprise-grade data analytics, AI, ML, and data engineering solutions.",
              sameAs: [
                "https://www.linkedin.com/company/datronyx",
                "https://twitter.com/datronyx"
              ]
            }),
          }}
        />

        {/* Main content area */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
