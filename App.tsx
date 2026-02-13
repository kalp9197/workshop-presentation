import React, { useState, useEffect } from 'react';
import { slides } from './data';
import SlideRenderer from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, MessageSquareText } from 'lucide-react';

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
    <div className="h-screen w-screen flex flex-col bg-surface-50 text-txt-900 overflow-hidden font-sans selection:bg-brand-red/20 selection:text-brand-red">

      {/* Main Slide Area */}
      <main className="flex-1 relative flex min-h-0">
        {/* Slide Content */}
        <div className={`transition-all duration-300 h-full ${showNotes ? 'w-full sm:w-3/5 md:w-2/3 lg:w-3/4' : 'w-full'}`}>
          <SlideRenderer slide={currentSlide} />
        </div>

        {/* Session Guide Sidebar — light theme */}
        {showNotes && (
          <div className="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 bg-surface-100 border-l border-surface-300 overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-surface-300 flex items-center gap-2 flex-shrink-0">
              <BookOpen className="w-4 h-4 text-brand-red" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-txt-700">Session Guide</h3>
            </div>

            {/* Speaker Notes */}
            <div className="p-3 sm:p-4 flex-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <MessageSquareText className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                <p className="text-[10px] sm:text-xs text-brand-red font-bold uppercase tracking-wider">Notes</p>
              </div>
              <p className="text-txt-500 text-[10px] sm:text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
                {currentSlide.notes}
              </p>

              {/* Key Takeaway — in sidebar */}
              {currentSlide.takeaway && (
                <div className="mt-4 sm:mt-5 md:mt-6 bg-brand-redLight border border-brand-red/20 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                    <p className="text-[10px] sm:text-xs text-brand-red font-bold uppercase tracking-wider">Key Takeaway</p>
                  </div>
                  <p className="text-txt-900 text-xs sm:text-sm md:text-base font-medium leading-relaxed">{currentSlide.takeaway}</p>
                </div>
              )}
            </div>

          </div>
        )}
      </main>

      {/* Footer / Controls — light theme */}
      <footer className="h-10 sm:h-12 md:h-14 bg-surface-50 border-t border-surface-300 flex items-center justify-between px-2 sm:px-3 md:px-6 z-50 flex-shrink-0 relative">

        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2 group flex-shrink-0">
            <span className="hidden sm:inline text-[10px] sm:text-xs text-txt-400 uppercase tracking-[0.18em]">
              Presented by
            </span>
            <a
              href="https://technotery.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/assets/cropped-Technotery-Logo-512px.png"
                alt="Technotery"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </a>
            <span className="hidden sm:inline text-[11px] sm:text-xs font-semibold text-txt-400">
              &
            </span>
            <img
              src="/assets/infopercept-logo.svg"
              alt="Infopercept"
              className="h-4 w-auto sm:h-5 sm:w-auto"
            />
          </div>
          <div className="h-3 sm:h-4 w-[1px] bg-surface-300"></div>
          <div className="text-xs sm:text-sm text-txt-500 flex-shrink-0">
            {currentSlideIndex + 1} / {slides.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-brand-red transition-all duration-300" style={{ width: `${progress}%` }}></div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-1 sm:p-1.5 md:p-2 rounded hover:bg-surface-200 transition-colors ${showNotes ? 'text-brand-red' : 'text-txt-400'}`}
            title="Toggle Session Guide (S)"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="h-3 sm:h-4 w-[1px] bg-surface-300 mx-0.5 sm:mx-1 md:mx-2"></div>
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-1 sm:p-1.5 md:p-2 rounded hover:bg-surface-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-txt-700"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="p-1 sm:p-1.5 md:p-2 rounded hover:bg-surface-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-txt-700"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;