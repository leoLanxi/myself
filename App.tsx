import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Photography from './components/Photography';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const enableChat = (import.meta as any).env?.VITE_ENABLE_CHAT === 'true';
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Photography />
        <Blog />
        <section id="contact" className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">一起打造有价值的系统</h2>
            <p className="text-gray-600 mb-8 text-lg">
              需要 Go 微服务、系统性能优化、定时与异步框架，或是想聊聊工程实践与摄影，都欢迎联系我。
            </p>
            <a href="mailto:zlxworkmail@163.com" className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              发送邮件联系我
            </a>
          </div>
        </section>
      </main>
      <Footer />
      {enableChat && <AIChat />}
    </div>
  );
};

export default App;
