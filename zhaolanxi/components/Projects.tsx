import React from 'react';
import { Code2, ArrowUpRight, Cpu, Database, Server } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Projects: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes("Clock")) return <Server size={24} />;
    if (name.includes("Takeaway")) return <Cpu size={24} />;
    return <Database size={24} />;
  };

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <Code2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">核心项目经验</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-600 hidden sm:block">
                    {getIcon(project.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                    <p className="text-slate-500 text-sm">{project.role} · {project.period}</p>
                  </div>
                </div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed border-b border-slate-100 pb-4">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">个人职责</h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-2 text-slate-600 text-sm">
                        <ArrowUpRight size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">技术难点 & 成果</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((chal, i) => (
                      <li key={i} className="flex gap-2 text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                        <span>{chal}</span>
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