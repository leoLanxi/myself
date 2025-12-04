import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Camera, BookOpen, FileText, Gamepad } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const workTimer = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Resume', href: 'resume', icon: <FileText size={18} />, external: false },
    { name: 'Stroop Game', href: 'http://124.221.198.43/', icon: <Gamepad size={18} />, external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            const seg = window.location.pathname.split('/')[1];
            const base = seg ? `/${seg}/` : '/';
            window.history.pushState({}, '', base);
            window.dispatchEvent(new Event('popstate'));
          }}
        >
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-mono font-bold text-lg group-hover:bg-blue-600 transition-colors">
            Z
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">ZhaoLanxi</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div 
            className="relative"
            onMouseEnter={() => {
              if (workTimer.current) clearTimeout(workTimer.current);
              setWorkOpen(true);
            }}
            onMouseLeave={() => {
              if (workTimer.current) clearTimeout(workTimer.current);
              workTimer.current = setTimeout(() => setWorkOpen(false), 250);
            }}
          >
            <a 
              href="#work" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Terminal size={18} />
              Menu
            </a>
            <div 
              className={`absolute mt-2 left-0 w-44 bg-white border border-gray-100 shadow-lg rounded-xl p-2 transition-all duration-200 ${workOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
              onMouseEnter={() => {
                if (workTimer.current) clearTimeout(workTimer.current);
                setWorkOpen(true);
              }}
              onMouseLeave={() => {
                if (workTimer.current) clearTimeout(workTimer.current);
                workTimer.current = setTimeout(() => setWorkOpen(false), 250);
              }}
            >
              <a 
                href="#photography" 
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Camera size={16} /> Photography
              </a>
              <a 
                href="#blog" 
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <BookOpen size={16} /> Blog
              </a>
            </div>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-600 hover:text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <a 
              href="#work"
              className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Terminal size={18} /> Menu
            </a>
            <div className="pl-6 flex flex-col">
              <a 
                href="#photography"
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Camera size={16} /> Photography
              </a>
              <a 
                href="#blog"
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen size={16} /> Blog
              </a>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
