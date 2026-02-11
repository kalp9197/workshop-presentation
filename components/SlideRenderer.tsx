import React from 'react';
import { SlideData } from '../types';
import { Terminal, Database, Server, Cpu, Layers, ArrowRight } from 'lucide-react';

interface Props {
  slide: SlideData;
}

// Common visual elements
const Title = ({ children }: React.PropsWithChildren<{}>) => (
  <h1 className="text-5xl font-display font-bold text-cyan-400 mb-4 leading-tight">{children}</h1>
);

const Subtitle = ({ children }: React.PropsWithChildren<{}>) => (
  <h2 className="text-2xl font-display font-semibold text-white/90 mb-8">{children}</h2>
);

const ContentList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start text-xl text-gray-200">
        <span className="text-cyan-400 mr-3 mt-1">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  // Layout Renderers
  switch (slide.layout) {
    case 'title':
      return (
        <div className="h-full flex flex-col items-center justify-center text-center px-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             {/* Matrix-like background effect simulated with text */}
             <div className="font-mono text-xs text-neon-green break-all leading-none">
               {Array(5000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
             </div>
          </div>
          <div className="relative z-10 p-12 bg-navy-900/80 rounded-3xl backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_50px_rgba(0,212,255,0.2)]">
            <div className="flex justify-center space-x-6 mb-8 text-cyan-400">
              <Database size={48} />
              <ArrowRight size={48} />
              <Server size={48} />
              <ArrowRight size={48} />
              <Cpu size={48} />
            </div>
            <Title>{slide.title}</Title>
            <div className="w-32 h-1 bg-neon-green mx-auto my-6"></div>
            <p className="text-2xl text-white font-light">{slide.subtitle}</p>
            {slide.visualDesc && (
              <div className="mt-12 inline-block px-4 py-2 border border-gray-600 rounded text-gray-400 text-sm tracking-widest uppercase">
                {slide.visualDesc}
              </div>
            )}
          </div>
        </div>
      );

    case 'section':
      return (
        <div className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-navy-900 to-navy-800 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/5 select-none font-display">
            {slide.id}
          </div>
          <div className="relative z-10">
             <h3 className="text-neon-green font-mono text-xl mb-4 tracking-widest uppercase">Section Break</h3>
             <Title>{slide.title}</Title>
             <p className="text-3xl text-white max-w-4xl font-light leading-relaxed mt-6">
               "{slide.sectionTitle}"
             </p>
          </div>
        </div>
      );

    case 'timeline':
      return (
        <div className="h-full px-16 py-12 flex flex-col justify-center">
          <Title>{slide.title}</Title>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2 z-0"></div>
              <div className="relative z-10 flex justify-between">
                {slide.content?.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center group w-48 text-center">
                    <div className="w-8 h-8 rounded-full bg-navy-900 border-4 border-cyan-400 mb-4 group-hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.5)]"></div>
                    <p className="text-sm font-bold text-white mb-1">{item.split('(')[0]}</p>
                    <p className="text-xs text-cyan-400">{item.split('(')[1]?.replace(')', '')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 'two-column':
      return (
        <div className="h-full px-16 py-12 flex flex-col">
          <div className="mb-8">
            <Title>{slide.title}</Title>
            {slide.subtitle && <Subtitle>{slide.subtitle}</Subtitle>}
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-12">
            {/* Left Col */}
            <div className={`p-8 rounded-2xl bg-navy-800/50 border border-gray-700/50 ${slide.columns?.left.color || 'text-white'}`}>
              <h3 className="text-2xl font-bold mb-6 font-display border-b border-gray-700 pb-2">
                {slide.columns?.left.title}
              </h3>
              {Array.isArray(slide.columns?.left.content) ? (
                 <ul className="space-y-4">
                   {slide.columns?.left.content.map((item, idx) => (
                     <li key={idx} className="text-lg opacity-90">{item}</li>
                   ))}
                 </ul>
              ) : (
                <p>{slide.columns?.left.content}</p>
              )}
            </div>

            {/* Right Col */}
            <div className={`p-8 rounded-2xl bg-navy-800/50 border border-gray-700/50 ${slide.columns?.right.color || 'text-white'}`}>
              <h3 className="text-2xl font-bold mb-6 font-display border-b border-gray-700 pb-2">
                {slide.columns?.right.title}
              </h3>
              {Array.isArray(slide.columns?.right.content) ? (
                 <ul className="space-y-4">
                   {slide.columns?.right.content.map((item, idx) => (
                     <li key={idx} className="text-lg opacity-90">{item}</li>
                   ))}
                 </ul>
              ) : (
                <p>{slide.columns?.right.content}</p>
              )}
            </div>
          </div>
        </div>
      );

    case 'code':
      return (
        <div className="h-full px-16 py-12 flex flex-col">
          <div className="mb-6">
            <Title>{slide.title}</Title>
            {slide.subtitle && <Subtitle>{slide.subtitle}</Subtitle>}
          </div>
          
          <div className="flex-1 flex gap-8 min-h-0">
             <div className="w-1/3 py-4">
                {slide.content && <ContentList items={slide.content} />}
             </div>
             <div className="w-2/3 bg-[#1e1e1e] rounded-xl p-6 overflow-auto shadow-2xl border border-gray-700 relative group">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-300 mt-6">
                  <code>{slide.code}</code>
                </pre>
             </div>
          </div>
        </div>
      );
      
    case 'diagram':
    case 'content':
    default:
      return (
        <div className="h-full px-16 py-12 flex flex-col">
          <div className="mb-8">
            <Title>{slide.title}</Title>
            {slide.subtitle && <Subtitle>{slide.subtitle}</Subtitle>}
          </div>
          
          <div className="flex-1">
            {slide.content && <ContentList items={slide.content} />}
            
            {slide.code && (
              <div className="mt-8 bg-navy-800 p-6 rounded-lg border-l-4 border-neon-green font-mono text-neon-green">
                <pre>{slide.code}</pre>
              </div>
            )}
          </div>
        </div>
      );
  }
};

export default SlideRenderer;