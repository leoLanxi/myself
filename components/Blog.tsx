import React from 'react';
import { BlogPost } from '../types';
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimizing Go Routines for High Throughput',
    excerpt: 'Exploring patterns for managing thousands of concurrent goroutines in data-intensive applications without blowing up memory.',
    date: 'Oct 12, 2023',
    tags: ['Go', 'Concurrency', 'Performance'],
    readTime: '8 min'
  },
  {
    id: '2',
    title: 'Fine-tuning Llama 3 on Custom Codebases',
    excerpt: 'A practical guide to preparing datasets and configuring LoRA adapters for specializing LLMs on proprietary tech stacks.',
    date: 'Nov 05, 2023',
    tags: ['AI', 'LLM', 'Fine-tuning'],
    readTime: '12 min'
  },
  {
    id: '3',
    title: 'From Monolith to Microservices: A Retrospective',
    excerpt: 'Lessons learned migrating a legacy PHP application to a distributed Go architecture. The good, the bad, and the ugly.',
    date: 'Dec 01, 2023',
    tags: ['Architecture', 'Microservices'],
    readTime: '10 min'
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Technical Articles</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-100 border border-transparent transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Read Article <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;