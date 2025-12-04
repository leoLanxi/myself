import React from 'react';
import { Wrench, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <Wrench size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">专业技能</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RESUME_DATA.skills.map((category, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};