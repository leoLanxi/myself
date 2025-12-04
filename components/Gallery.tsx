import React, { useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';

const Gallery: React.FC = () => {
  const photos = useMemo(() => {
    const files = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
    const entries = Object.entries(files)
      .map(([path, url]) => ({ path, url: url as string }))
      .sort((a, b) => a.path.localeCompare(b.path));
    const heights = ['h-64', 'h-72', 'h-80', 'h-96'];
    return entries.map((e, idx) => {
      const name = e.path.split('/').pop() || `photo-${idx + 1}`;
      const caption = name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      return {
        id: String(idx + 1),
        url: e.url,
        caption,
        heightClass: heights[idx % heights.length],
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="pt-24">
        <section className="py-24 bg白">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Full Gallery</h2>
                <p className="text-gray-500 max-w-md">All photos from assets/photos.</p>
              </div>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {photos.map((photo) => (
                <div key={photo.id} className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <img src={photo.url} alt={photo.caption} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
