import React, { useState, useEffect } from 'react';
import { slides } from './data';
import SlideRenderer from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Mic2, Clock, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const currentSlide = slides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key.toLowerCase() === 's') {
        setShowNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="h-screen w-screen flex flex-col bg-navy-900 text-white overflow-hidden font-sans selection:bg-cyan-400 selection:text-navy-900">
      
      {/* Main Slide Area */}
      <main className="flex-1 relative flex">
        <div className={`transition-all duration-300 h-full ${showNotes ? 'w-3/4' : 'w-full'}`}>
          <SlideRenderer slide={currentSlide} />
          
          {/* Key Takeaway Toast - Always visible on content slides */}
          {currentSlide.takeaway && currentSlide.layout !== 'title' && currentSlide.layout !== 'section' && (
             <div className="absolute bottom-8 left-16 right-16">
               <div className="bg-navy-800 border-l-4 border-cyan-400 p-4 shadow-lg rounded-r-lg flex items-center">
                 <div className="bg-cyan-400/10 p-2 rounded-full mr-4 text-cyan-400">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Key Takeaway</p>
                    <p className="text-lg font-semibold text-white">{currentSlide.takeaway}</p>
                 </div>
               </div>
             </div>
          )}
        </div>

        {/* Speaker Notes Sidebar */}
        {showNotes && (
          <div className="w-1/4 bg-[#050c15] border-l border-gray-800 p-6 overflow-y-auto flex flex-col">
            <h3 className="text-gray-400 font-bold uppercase tracking-wider mb-4 flex items-center">
              <Mic2 size={16} className="mr-2" /> Speaker Notes
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap font-sans">
              {currentSlide.notes}
            </p>
            <div className="mt-auto pt-8">
               <div className="bg-navy-800 p-4 rounded-lg">
                 <p className="text-sm text-gray-500 mb-1">Estimated Time</p>
                 <div className="flex items-center text-neon-green font-mono text-xl">
                   <Clock size={20} className="mr-2" /> {currentSlide.duration} min
                 </div>
               </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer / Controls */}
      <footer className="h-14 bg-navy-900 border-t border-gray-800 flex items-center justify-between px-6 z-50">
        
        <div className="flex items-center space-x-4">
          <div className="text-cyan-400 font-display font-bold">MERN Workshop</div>
          <div className="h-4 w-[1px] bg-gray-700"></div>
          <div className="text-sm text-gray-400">
            {currentSlideIndex + 1} / {slides.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-cyan-400 transition-all duration-300" style={{ width: `${progress}%` }}></div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded hover:bg-white/10 transition-colors ${showNotes ? 'text-neon-green' : 'text-gray-400'}`}
            title="Toggle Speaker Notes (S)"
          >
            <Mic2 size={20} />
          </button>
          <div className="h-4 w-[1px] bg-gray-700 mx-2"></div>
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="p-2 rounded hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;