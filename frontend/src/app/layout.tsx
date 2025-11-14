import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://datronyx.com"),

  title: {
    default: "Datronyx – Turning Hardened Data into Luminous Models",
    template: "%s | Datronyx"
  },

  description:
    "Datronyx is an AI, Machine Learning, and Data Science company transforming complex enterprise data into powerful predictive insights using state-of-the-art LLMs and intelligent automation.",
  
  keywords: [
    "Datronyx",
    "AI company",
    "machine learning",
    "LLM solutions",
    "data science",
    "enterprise AI",
    "AI automation",
    "predictive analytics",
    "data engineering",
    "LLM integration"
  ],

  openGraph: {
    title: "Datronyx – Intelligent AI, ML & Data Science Solutions",
    description: 
      "We build intelligent AI-powered solutions that convert enterprise data into predictive, actionable insights.",
    url: "https://datronyx.com",
    siteName:  "Datronyx",
    images: [
      {
        url: "./public/datronyx-logo.png", 
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
      "Datronyx builds enterprise-grade AI & ML systems powered by Large Language Models.",
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
      maxImagePreview: "large",   
      maxSnippet: -1,
      maxVideoPreview: -1,
    }
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className="bg-primary text-light flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
