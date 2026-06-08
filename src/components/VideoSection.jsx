import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialVideos = [
  {
    id: 'vid-1',
    title: "Luxury Medical Facilities",
    category: "Hospital Tour",
    thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    videoUrl: "https://player.vimeo.com/video/76979871"
  },
  {
    id: 'vid-2',
    title: "Holistic Wellness Retreats",
    category: "Recovery",
    thumbnail: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/video/117770305"
  },
  {
    id: 'vid-3',
    title: "Patient Success Stories",
    category: "Testimonials",
    thumbnail: "/assets/zen-stones.png",
    videoUrl: "https://player.vimeo.com/video/226053498"
  }
];

export default function VideoSection() {
  const [videoList, setVideoList] = useState(initialVideos);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = (clickedVid, index) => {
    if (index === 0) {
      setIsPlaying(true);
      return;
    }
    
    // Swap the clicked video with the main video (index 0)
    const newList = [...videoList];
    const temp = newList[0];
    newList[0] = newList[index];
    newList[index] = temp;
    
    setVideoList(newList);
    setIsPlaying(false);
  };

  return (
    <section id="tour" className="relative min-h-[100vh] w-full flex flex-col items-center justify-center py-24 pointer-events-auto overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              A Glimpse into Healing
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Explore our world-class facilities and deeply transformative holistic experiences.
            </p>
          </div>
          <p className="text-sm font-bold tracking-widest text-wellness-600 uppercase">
            Select a video to explore
          </p>
        </div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-6 h-[800px] md:h-[600px]">
          {videoList.map((vid, index) => {
            const isMain = index === 0;

            return (
              <motion.div
                layoutId={vid.id}
                key={vid.id}
                onClick={() => handleVideoClick(vid, index)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer group bg-slate-900 shadow-xl border border-slate-100
                  ${isMain ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' : 'md:col-span-1 md:row-span-1 h-[190px] md:h-full'}
                `}
              >
                {/* Video Player or Thumbnail */}
                {isMain && isPlaying ? (
                  <iframe 
                    src={`${vid.videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isMain ? 'from-slate-900/80 via-slate-900/20' : 'from-slate-900/90 via-slate-900/40'} to-transparent transition-opacity group-hover:opacity-90`}></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      {/* Top Right Category Pill */}
                      <div className="self-end">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                          {vid.category}
                        </span>
                      </div>

                      {/* Bottom Title & Play Button */}
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className={`font-bold text-white leading-tight ${isMain ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                            {vid.title}
                          </h3>
                        </div>

                        {/* Play Button */}
                        <div className={`rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-xl transition-all duration-500 group-hover:scale-110 shrink-0
                          ${isMain ? 'w-20 h-20 md:w-24 md:h-24' : 'w-12 h-12'}
                        `}>
                          <Play className={`${isMain ? 'h-8 w-8 md:h-10 md:w-10 ml-1' : 'h-5 w-5 ml-0.5'}`} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
