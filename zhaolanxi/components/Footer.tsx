import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-1">{RESUME_DATA.name}</h3>
          <p className="text-sm">构建高性能后端系统的工程师</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} Zhao Lanxi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};