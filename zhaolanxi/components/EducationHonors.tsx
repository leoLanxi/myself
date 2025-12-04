import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const EducationHonors: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">教育背景</h2>
          </div>
          
          <div className="space-y-8">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                 <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                 <p className="text-slate-700 font-medium">{edu.degree}</p>
                 <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                 <div className="flex flex-wrap gap-2">
                   {edu.details.map((detail, i) => (
                     <span key={i} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                       {detail}
                     </span>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">荣誉奖项</h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.honors.map((honor, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};