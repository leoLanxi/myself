import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  const { name, title, contact } = RESUME_DATA;

  return (
    <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col items-start justify-center animate-in fade-in duration-700">
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-blue-600 font-medium tracking-wide text-lg">你好, 我是</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 font-light">
          {title}
        </p>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          专注于高并发、分布式系统架构设计的后端工程师。
          熟悉 Golang 生态，拥有大型搜索业务架构开发与稳定性治理经验。
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <Mail size={18} />
            <span>{contact.email}</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
            <Phone size={18} />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
            <MapPin size={18} />
            <span>{contact.location}</span>
          </div>
        </div>

        <div className="pt-4">
           {/* Mock download button */}
           <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-transform active:scale-95 shadow-md shadow-blue-200">
             <Download size={20} />
             下载简历 PDF
           </button>
        </div>
      </div>
    </section>
  );
};