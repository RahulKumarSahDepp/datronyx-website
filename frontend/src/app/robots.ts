import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Base Url
  const baseUrl = 'https://www.datronyx.com'
  const isProduction = process.env.VERCEL_ENV === 'production' 

  // 3. Logic: If not production, Disallow EVERYTHING
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  // 4. Production Rules
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Don't crawl API endpoints
          '/_next/',      // Don't crawl Next.js build files
          // '/static/',     // Don't crawl static assets 
          // '/private/',  
          // '/admin/',    
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}