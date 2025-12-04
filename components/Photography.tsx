import React from 'react';
import { Photo } from '../types';

const photos: Photo[] = [
  { id: '1', url: 'https://picsum.photos/600/800?random=1', caption: 'Urban Solitude', heightClass: 'h-96' },
  { id: '2', url: 'https://picsum.photos/600/400?random=2', caption: 'Cyberpunk Neon', heightClass: 'h-64' },
  { id: '3', url: 'https://picsum.photos/600/600?random=3', caption: 'Geometric Shadows', heightClass: 'h-72' },
  { id: '4', url: 'https://picsum.photos/600/500?random=4', caption: 'Misty Mountains', heightClass: 'h-80' },
  { id: '5', url: 'https://picsum.photos/600/700?random=5', caption: 'Street Corners', heightClass: 'h-80' },
  { id: '6', url: 'https://picsum.photos/600/450?random=6', caption: 'Tech Details', heightClass: 'h-60' },
];

const Photography: React.FC = () => {
  return (
    <section id="photography" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Interests & Photography</h2>
            <p className="text-gray-500 max-w-md">
              When I'm not training models, I'm capturing moments. Exploring the intersection of urban structure and natural chaos.
            </p>
          </div>
          <a href="#" className="hidden md:block text-blue-600 font-medium hover:underline">View Full Gallery</a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <a href="#" className="text-blue-600 font-medium hover:underline">View Full Gallery</a>
        </div>
      </div>
    </section>
  );
};

export default Photography;