import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogData'

// 1. Generate Static Params (Keeps build fast)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Article Not Found' }

  return {
    title: `${post.title} | Datronyx`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Datronyx Team'],
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params here too!
  const { slug } = await params
  
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-slate-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/knowledge" className="text-slate-400 hover:text-cyan-400 text-sm mb-6 inline-block transition-colors">
            ← Back to Knowledge Hub
          </Link>
          
          <div className="mb-4">
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>{post.readTime}</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="text-cyan-400">By Datronyx Team</span>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 border-l-4 border-cyan-500 pl-4">
          {post.excerpt}
        </p>

        <div 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900 
          prose-p:text-slate-600 prose-p:leading-loose
          prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div className="mt-20 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Need help implementing this?</h3>
          <p className="text-slate-600 mb-6">
            Datronyx specializes in enterprise data solutions. Let's discuss your infrastructure.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </article>
  )
}