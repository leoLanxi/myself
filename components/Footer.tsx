import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-gray-900">AlexDev</h4>
            <p className="text-sm text-gray-500 mt-1">Building digital experiences & AI models.</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Work</a>
            <a href="#" className="hover:text-black transition-colors">Photography</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Made with <Heart size={14} className="text-red-500 fill-current" /> and React.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;