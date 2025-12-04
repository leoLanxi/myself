import React from 'react';
import { Briefcase } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">工作经历</h2>
        </div>

        <div className="space-y-12">
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-slate-200"></div>
              
              <div className="md:flex gap-12 group">
                <div className="md:w-[200px] flex-shrink-0 md:text-right mb-2 md:mb-0 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute right-[-6px] top-2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-slate-50"></div>
                  <p className="text-sm font-bold text-slate-500">{job.period}</p>
                  <p className="text-slate-400 text-xs mt-1">全职</p>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                  <p className="text-blue-600 font-medium mb-4">{job.role}</p>
                  <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                  
                  <ul className="space-y-2">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};