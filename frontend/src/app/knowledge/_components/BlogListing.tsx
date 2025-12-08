import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';

export default function BlogListing() {
  return (
    <section className="relative w-full py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-50"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hub</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              Engineering the future of intelligence. Deep dives into data architecture, 
              autonomous agents, and the analytics stack.
            </p>
          </div>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/knowledge/${post.slug}`}
              className="group flex flex-col h-full perspective-1000"
            >
              <article className="relative flex flex-col h-full bg-[#0F121C] border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-500/40">
                
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="p-8 flex flex-col h-full relative z-10">
                  
                  {/* Category Pill */}
                  <div className="mb-6 flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                      <Sparkles className="w-3 h-3" />
                      {post.category}
                    </span>
                    
                    {/* Read Time (Subtle) */}
                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-slate-300 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Footer / Call To Action */}
                  <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center justify-between group-hover:border-blue-500/20 transition-colors">
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Read Article
                      <div className="bg-slate-800 p-1.5 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </span>
                  </div>
                </div>

                {/* Subtle Inner Glow on Hover (Background Shift) */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}