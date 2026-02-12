import React from 'react';
import { SlideData } from '../types';
import { Database, Server, Cpu, ArrowRight } from 'lucide-react';

interface Props {
  slide: SlideData;
}

// ─── Logo Watermark ─────────────────────────────────────────
// Subtle Technotery logo in the background of every content slide
const LogoWatermark: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
    <img
      src="/assets/Technotery logo - Transparent.png"
      alt=""
      className="w-[40%] max-w-[500px] opacity-[0.03]"
      aria-hidden="true"
    />
  </div>
);

// ─── Shared Components ─────────────────────────────────────────

const SlideTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-txt-900 leading-tight flex-shrink-0">
    {children}
  </h1>
);

const SlideSubtitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-semibold text-txt-500 mt-1 sm:mt-2 flex-shrink-0">
    {children}
  </h2>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start text-xs sm:text-sm md:text-base lg:text-lg text-txt-700">
        <span className="text-brand-red mr-2 mt-0.5 flex-shrink-0 font-bold">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CodeBlock: React.FC<{ code: string; className?: string }> = ({ code, className = '' }) => (
  <div className={`bg-[#1e1e2e] rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-200 relative ${className}`}>
    <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 flex space-x-1.5">
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400"></div>
    </div>
    <pre className="font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed text-gray-300 mt-4 sm:mt-5 overflow-x-auto">
      <code>{code}</code>
    </pre>
  </div>
);

// ─── Slide Wrapper ────────────────────────────────────────
// Guarantees no content cutoff on any slide
const SlideWrapper: React.FC<{
  slide: SlideData;
  children: React.ReactNode;
  showSubtitle?: boolean;
}> = ({ slide, children, showSubtitle = true }) => (
  <div className="h-full flex flex-col px-4 sm:px-6 md:px-10 lg:px-14 py-3 sm:py-4 md:py-6 lg:py-8 overflow-hidden relative">
    <LogoWatermark />
    {/* Fixed header area */}
    <div className="flex-shrink-0 mb-2 sm:mb-3 md:mb-4 relative z-10">
      <SlideTitle>{slide.title}</SlideTitle>
      {showSubtitle && slide.subtitle && <SlideSubtitle>{slide.subtitle}</SlideSubtitle>}
    </div>
    {/* Scrollable content area */}
    <div className="flex-1 min-h-0 overflow-y-auto relative z-10">
      {children}
    </div>
  </div>
);

// ─── Layout: Title ────────────────────────────────────────

const TitleLayout: React.FC<Props> = ({ slide }) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50">
    {/* Subtle geometric pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-red rounded-full blur-[100px]"></div>
    </div>

    {/* Large watermark logo behind card */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <img
        src="/assets/Technotery logo - Transparent.png"
        alt=""
        className="w-[60%] max-w-[700px] opacity-[0.04]"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 bg-surface-50/90 rounded-2xl backdrop-blur-sm border border-surface-300 shadow-xl max-w-full w-full max-w-4xl">
      <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-3 sm:mb-5 md:mb-6 text-brand-red">
        <Database className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11" />
        <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11" />
        <Server className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11" />
        <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11" />
        <Cpu className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11" />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-txt-900 leading-tight mb-2 sm:mb-3 md:mb-4">
        {slide.title}
      </h1>
      <div className="w-12 sm:w-20 md:w-28 h-1 bg-brand-red mx-auto my-2 sm:my-3 md:my-4 rounded-full"></div>
      <p className="text-xs sm:text-sm md:text-base lg:text-xl text-txt-500 font-light">{slide.subtitle}</p>
      {slide.visualDesc && (
        <div className="mt-3 sm:mt-5 md:mt-6 inline-block px-3 py-1.5 sm:py-2 border border-surface-400 rounded-full text-txt-500 text-[10px] sm:text-xs tracking-widest uppercase">
          {slide.visualDesc}
        </div>
      )}
    </div>

    {/* Technotery Branding */}
    <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      <span className="text-[9px] sm:text-[10px] md:text-xs text-txt-400 uppercase tracking-[0.2em] mb-1">Presented by</span>
      <a href="https://technotery.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        <img
          src="/assets/Technotery logo - Transparent.png"
          alt="Technotery Business Solutions"
          className="h-5 sm:h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity"
        />
      </a>
    </div>
  </div>
);

// ─── Layout: Section ────────────────────────────────────────

const SectionLayout: React.FC<Props> = ({ slide }) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-gradient-to-br from-surface-50 to-surface-100 relative overflow-hidden">
    {/* Large background number */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[22rem] font-black text-txt-900/[0.03] select-none font-display pointer-events-none">
      {slide.id}
    </div>
    <LogoWatermark />
    <div className="relative z-10 max-w-3xl">
      <h3 className="text-brand-red font-mono text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 tracking-widest uppercase font-bold">Section Break</h3>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-txt-900 leading-tight">
        {slide.title}
      </h1>
      <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-txt-500 max-w-4xl font-light leading-relaxed mt-2 sm:mt-3 md:mt-5">
        "{slide.sectionTitle}"
      </p>
    </div>
  </div>
);

// ─── Layout: Timeline ────────────────────────────────────────

const TimelineLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide} showSubtitle={false}>
    <div className="h-full flex items-center justify-center">
      {/* Desktop: horizontal */}
      <div className="w-full relative hidden md:block">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-300 -translate-y-1/2 z-0"></div>
        <div className="relative z-10 flex justify-between">
          {slide.content?.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group w-20 lg:w-36 text-center">
              <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-surface-50 border-[3px] border-brand-red mb-2 lg:mb-3 group-hover:bg-brand-red transition-colors shadow-md"></div>
              <p className="text-[10px] lg:text-xs font-bold text-txt-900 mb-0.5">{item.split('(')[0]}</p>
              <p className="text-[9px] lg:text-[10px] text-brand-red font-medium">{item.split('(')[1]?.replace(')', '')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: vertical */}
      <div className="w-full relative md:hidden">
        <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-surface-300 z-0"></div>
        <div className="relative z-10 space-y-3 sm:space-y-4 pl-8">
          {slide.content?.map((item, idx) => (
            <div key={idx} className="flex items-start group relative">
              <div className="absolute left-[-1.25rem] top-1 w-4 h-4 rounded-full bg-surface-50 border-[3px] border-brand-red group-hover:bg-brand-red transition-colors shadow-sm"></div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-txt-900">{item.split('(')[0]}</p>
                <p className="text-[10px] sm:text-xs text-brand-red font-medium">{item.split('(')[1]?.replace(')', '')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// ─── Layout: Two Column ────────────────────────────────────────

const TwoColumnLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full">
      {/* Left Column */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-surface-100 border border-surface-300 overflow-y-auto">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 font-display border-b border-surface-300 pb-2 text-txt-900">
          {slide.columns?.left.title}
        </h3>
        {Array.isArray(slide.columns?.left.content) ? (
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
            {slide.columns?.left.content.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm md:text-base text-txt-700">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm md:text-base text-txt-700">{slide.columns?.left.content}</p>
        )}
      </div>

      {/* Right Column */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-surface-100 border border-surface-300 overflow-y-auto">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 font-display border-b border-surface-300 pb-2 text-txt-900">
          {slide.columns?.right.title}
        </h3>
        {Array.isArray(slide.columns?.right.content) ? (
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
            {slide.columns?.right.content.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm md:text-base text-txt-700">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm md:text-base text-txt-700">{slide.columns?.right.content}</p>
        )}
      </div>
    </div>
  </SlideWrapper>
);

// ─── Layout: Code ────────────────────────────────────────

const CodeLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 h-full min-h-0">
      {slide.content && (
        <div className="flex-shrink-0 md:w-1/3">
          <BulletList items={slide.content} />
        </div>
      )}
      <div className={`${slide.content ? 'md:w-2/3' : 'w-full'} flex-1 min-h-0`}>
        <CodeBlock code={slide.code || ''} className="h-full overflow-auto" />
      </div>
    </div>
  </SlideWrapper>
);

// ─── Layout: Content ────────────────────────────────────────

const ContentLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="space-y-3 sm:space-y-4 md:space-y-5">
      {slide.content && <BulletList items={slide.content} />}

      {slide.code && (
        <div className="bg-[#1e1e2e] p-3 sm:p-4 md:p-5 rounded-lg border-l-4 border-brand-red font-mono text-green-400 overflow-x-auto">
          <pre className="text-[10px] sm:text-xs md:text-sm">{slide.code}</pre>
        </div>
      )}
    </div>
  </SlideWrapper>
);

// ─── Layout: Diagram ────────────────────────────────────────

const DiagramLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    {slide.content && <BulletList items={slide.content} />}
    {slide.code && (
      <div className="mt-3 sm:mt-4 md:mt-5">
        <CodeBlock code={slide.code} />
      </div>
    )}
  </SlideWrapper>
);

// ─── Main Renderer ────────────────────────────────────────

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  switch (slide.layout) {
    case 'title':
      return <TitleLayout slide={slide} />;
    case 'section':
      return <SectionLayout slide={slide} />;
    case 'timeline':
      return <TimelineLayout slide={slide} />;
    case 'two-column':
      return <TwoColumnLayout slide={slide} />;
    case 'code':
      return <CodeLayout slide={slide} />;
    case 'diagram':
      return <DiagramLayout slide={slide} />;
    case 'content':
    default:
      return <ContentLayout slide={slide} />;
  }
};

export default SlideRenderer;