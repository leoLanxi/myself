import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const preFiles = import.meta.glob('../assets/pre/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
  const iconFiles = import.meta.glob('../assets/icons/*.{svg,png}', { eager: true, as: 'url' });
  const bilibiliIcon = Object.entries(iconFiles).find(([p]) => /bilibili/i.test(p))?.[1] as string | undefined;
  const xhsIcon = Object.entries(iconFiles).find(([p]) => /(xiaohongshu|xhs)/i.test(p))?.[1] as string | undefined;
  const preEntries = Object.entries(preFiles).map(([p, url]) => ({ p, url: url as string })).sort((a, b) => a.p.localeCompare(b.p));
  const portraitEnv = (import.meta.env?.VITE_PROFILE_IMAGE_URL as string) || '';
  const portraitSrc = preEntries[0]?.url || portraitEnv || 'https://picsum.photos/800/800?grayscale';
  return (
    <section id="work" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-[-1]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50 z-[-1]"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide rounded-full border border-blue-100">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            接受新机会
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
             Backend Engineer |
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              AI Apprentice
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            专注于高性能 <span className="font-semibold text-gray-900">Golang</span> 应用、微服务架构与系统稳定性建设，擅长定时与异步任务框架、性能优化与高并发。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={24} /></a>
              <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className="transition-opacity">
                {bilibiliIcon ? <img src={bilibiliIcon} alt="Bilibili" className="w-6 h-6 opacity-70 hover:opacity-100" /> : <img src="https://static.bilibili.com/favicon.ico" alt="Bilibili" className="w-6 h-6 opacity-70 hover:opacity-100" />}
              </a>
              <a href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer" className="transition-opacity">
                {xhsIcon ? <img src={xhsIcon} alt="Xiaohongshu" className="w-6 h-6 opacity-70 hover:opacity-100" /> : <span className="w-6 h-6 inline-block rounded bg-red-500 text-white text-xs flex items-center justify-center">RED</span>}
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['Golang', 'Gin', 'GORM', 'Kratos', 'MySQL', 'Redis', 'Kafka', 'Linux', 'TCP/IP', 'Algorithms', 'Docker'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
            <img 
              src={portraitSrc} 
              alt="Portrait of Zhao Lanxi" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-xl font-medium">赵蓝希</p>
              <p className="text-gray-300 text-sm">Shanghai, China</p>
            </div>
          </div>
          
          {/* Decorative Grid */}
          <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
