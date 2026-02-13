import React from 'react';
import { SlideData } from '../types';
import { Database, Server, Cpu, ArrowRight, Linkedin } from 'lucide-react';

interface Props {
  slide: SlideData;
}

// ─── Logo Watermark ─────────────────────────────────────────
// Subtle Technotery logo in the background of every content slide
const LogoWatermark: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
    <img
      src="/assets/Technotery logo - Transparent.png"
      alt="Technotery"
      className="w-[70%] max-w-[900px] opacity-[0.04]"
      aria-hidden="true"
    />
  </div>
);

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 2);

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

const LogoIntroLayout: React.FC<Props> = () => (
  <div className="h-full w-full flex items-center justify-center bg-surface-50">
    <img
      src="/assets/Technotery logo - Transparent.png"
      alt="Technotery"
      className="w-[85%] max-w-[1200px]"
    />
  </div>
);

const TitleLayout: React.FC<Props> = ({ slide }) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-surface-50 via-surface-100 to-surface-50">
    {/* Subtle geometric pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-red rounded-full blur-[100px]"></div>
    </div>

    {/* Large watermark logo behind card (Technotery only) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <img
        src="/assets/Technotery logo - Transparent.png"
        alt="Technotery"
        className="w-[85%] max-w-[1040px] opacity-[0.06]"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 bg-surface-50/90 rounded-2xl backdrop-blur-sm border border-surface-300 shadow-xl max-w-full w-full max-w-4xl -mt-6 sm:-mt-8 md:-mt-10">
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

    {/* Technotery + Infopercept Branding (Technotery dominant) */}
    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      <span className="text-[11px] sm:text-sm md:text-base text-txt-400 uppercase tracking-[0.28em]">
        Presented by
      </span>
      <div className="mt-2 flex items-center gap-4 sm:gap-6">
        <a
          href="https://technotery.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <img
            src="/assets/Technotery logo - Transparent.png"
            alt="Technotery"
            className="h-32 sm:h-40 md:h-48 lg:h-56 opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>
        <img
          src="/assets/infopercept-logo.svg"
          alt="Infopercept"
          className="h-8 sm:h-9 md:h-10 lg:h-11 opacity-80"
        />
      </div>
    </div>
  </div>
);

// ─── Layout: Presenters ────────────────────────────────────────

const PresentersLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 max-w-5xl mx-auto">
        {slide.presenters?.map((presenter) => (
          <div
            key={presenter.name}
            className="group relative bg-white rounded-2xl p-4 shadow-sm border border-surface-200 hover:shadow-xl hover:-translate-y-1 hover:border-brand-red/20 transition-all duration-300 flex flex-col w-full"
          >
            {/* LinkedIn Icon (Top Right) */}
            {presenter.linkedin && (
              <a
                href={presenter.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-surface-50 text-txt-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-colors"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative mb-3">
                {presenter.photoUrl ? (
                  <img
                    src={presenter.photoUrl}
                    alt={presenter.name}
                    className="w-20 h-20 rounded-full object-cover object-top border-4 border-white shadow-md ring-1 ring-surface-200 group-hover:scale-105 group-hover:ring-brand-red/20 transition-all duration-300"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-surface-100 flex items-center justify-center text-xl font-bold text-brand-red border-4 border-white shadow-md ring-1 ring-surface-200 group-hover:scale-105 transition-transform duration-300">
                    {getInitials(presenter.name)}
                  </div>
                )}
              </div>
              
              <div className="w-full mb-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-txt-900 leading-tight group-hover:text-brand-red transition-colors">
                  {presenter.name}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-txt-500 mt-0.5 uppercase tracking-wide">
                  {presenter.title}
                </p>
                 {presenter.experience && (
                  <div className="inline-flex items-center mt-1.5 px-2.5 py-0.5 rounded-full bg-surface-100 text-[10px] sm:text-xs text-txt-600 font-medium border border-surface-200">
                    {presenter.experience}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm md:text-base text-txt-600 leading-relaxed line-clamp-3">
                {presenter.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
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

// ─── Layout: Two Column ────────────────────────────────────────

const RoadmapLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="h-full flex flex-col justify-center py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400/30 via-brand-red/30 to-cyan-400/30 -translate-y-1/2 hidden md:block rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
          {/* Part 1: The Foundation */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-surface-50 border border-surface-200 p-6 sm:p-8 rounded-2xl shadow-xl transform group-hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-500 shadow-inner">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Phase 01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-txt-900 font-display">{slide.columns?.left.title}</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {(slide.columns?.left.content as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-green-400/10 flex items-center justify-center text-[10px] font-bold text-green-600 border border-green-400/20 group-hover/item:bg-green-400 group-hover/item:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base text-txt-700 font-medium group-hover/item:text-txt-900 transition-colors">
                      {item.replace(/^\d+\.\s*/, '')}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-surface-200">
               
              </div>
            </div>
          </div>

          {/* Part 2: The Application */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-surface-50 border border-surface-200 p-6 sm:p-8 rounded-2xl shadow-xl transform group-hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-500 shadow-inner">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Phase 02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-txt-900 font-display">{slide.columns?.right.title}</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {(slide.columns?.right.content as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center text-[10px] font-bold text-cyan-600 border border-cyan-400/20 group-hover/item:bg-cyan-400 group-hover/item:text-white transition-colors">
                      {idx + 4}
                    </div>
                    <span className="text-sm sm:text-base text-txt-700 font-medium group-hover/item:text-txt-900 transition-colors">
                      {item.replace(/^\d+\.\s*/, '')}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-surface-200">
                
              </div>
            </div>
          </div>
        </div>

        {/* Center Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex w-16 h-16 rounded-full bg-white border-4 border-surface-100 shadow-2xl items-center justify-center z-20">
          <ArrowRight className="w-8 h-8 text-brand-red" />
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const TwoColumnLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide}>
    <div className="space-y-4 sm:space-y-5 md:space-y-6 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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

      {/* Extra visual specifically for the Node.js intro slide */}
      {slide.id === 11 && (
        <div className="mt-1 sm:mt-2 md:mt-3">
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-txt-500 uppercase tracking-widest mb-2 sm:mb-3">
            Node.js Mental Model
          </h3>
          {/* Desktop / large: horizontal flow */}
          <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Cpu className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">Your JS Code</span>
                  <span className="text-[10px] text-txt-500">app.js / server.mjs</span>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-red flex-shrink-0" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-36 h-20 lg:w-44 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Server className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">Node.js Runtime</span>
                  <span className="text-[10px] text-txt-500">V8 + libuv + APIs</span>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-red flex-shrink-0" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Database className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">OS & Resources</span>
                  <span className="text-[10px] text-txt-500">File system, network, DB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / tablet: vertical flow */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">Your JavaScript File</p>
                <p className="text-[10px] sm:text-xs text-txt-500">The code you write</p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-brand-red rotate-90 mx-6" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Server className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">Node.js Runtime</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Executes JS and handles async I/O</p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-brand-red rotate-90 mx-6" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Database className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">System & Data</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Filesystem, network, databases, APIs</p>
              </div>
            </div>
          </div>
        </div>
      )}
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
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {slide.content && <BulletList items={slide.content} />}

      {/* Special visual flow for Request-Response Cycle slide */}
      {slide.id === 8 && (
        <div className="mt-1 sm:mt-2 md:mt-3">
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-txt-500 uppercase tracking-widest mb-3">
            Visual Flow
          </h3>

          {/* Desktop / large: horizontal flow */}
          <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-28 h-20 lg:w-32 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Cpu className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">Client</span>
                  <span className="text-[10px] text-txt-500">Browser / React UI</span>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-red flex-shrink-0" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Server className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">Node / Express</span>
                  <span className="text-[10px] text-txt-500">API Endpoint</span>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-red flex-shrink-0" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-28 h-20 lg:w-32 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Database className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">MongoDB</span>
                  <span className="text-[10px] text-txt-500">Data Store</span>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-brand-red flex-shrink-0" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-24 rounded-xl bg-surface-100 border border-surface-300 shadow-sm">
                <div className="flex flex-col items-center gap-1">
                  <Cpu className="w-6 h-6 text-brand-red" />
                  <span className="text-xs font-semibold text-txt-900">Client</span>
                  <span className="text-[10px] text-txt-500">Renders Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / tablet: vertical flow */}
          <div className="md:hidden space-y-3 sm:space-y-4 mt-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">Client (Browser)</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Sends HTTP Request</p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-brand-red rotate-90 mx-6" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Server className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">Node / Express</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Handles Request &amp; talks to DB</p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-brand-red rotate-90 mx-6" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Database className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">MongoDB</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Returns data to API</p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-brand-red rotate-90 mx-6" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-100 border border-surface-300 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-txt-900">Client UI</p>
                <p className="text-[10px] sm:text-xs text-txt-500">Renders Response Data</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {slide.code && (
        <div className="mt-3 sm:mt-4 md:mt-5">
          <CodeBlock code={slide.code} />
        </div>
      )}
    </div>
  </SlideWrapper>
);

// ─── Layout: Social QR ────────────────────────────────────────

const SocialQRLayout: React.FC<Props> = ({ slide }) => (
  <SlideWrapper slide={slide} showSubtitle={false}>
    <div className="h-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div className="text-center max-w-3xl">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-[0.2em] text-brand-red mb-2 sm:mb-3">
          Stay in the loop
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-semibold text-txt-900 leading-relaxed">
          <span className="font-extrabold">
            Follow us on social media platforms
          </span>{' '}
          to get the latest from the tech industry.
        </p>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-txt-600">
          We share a new
          <span className="font-bold text-txt-900"> Tricky Tuesday </span>
          challenge every week to sharpen your engineering mindset.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md border border-surface-200">
            <img
              src="/assets/technotery_linkedin_qrcode.png"
              alt="Technotery LinkedIn QR code"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-txt-700">
            LinkedIn
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md border border-surface-200">
            <img
              src="/assets/technotery_instagram_qrcode.png"
              alt="Technotery Instagram QR code"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-txt-700">
            Instagram
          </span>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// ─── Main Renderer ────────────────────────────────────────

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  switch (slide.layout) {
    case 'logo':
      return <LogoIntroLayout slide={slide} />;
    case 'title':
      return <TitleLayout slide={slide} />;
    case 'presenters':
      return <PresentersLayout slide={slide} />;
    case 'section':
      return <SectionLayout slide={slide} />;
    case 'timeline':
      return <TimelineLayout slide={slide} />;
    case 'two-column':
      return <TwoColumnLayout slide={slide} />;
    case 'roadmap':
      return <RoadmapLayout slide={slide} />;
    case 'code':
      return <CodeLayout slide={slide} />;
    case 'diagram':
      return <DiagramLayout slide={slide} />;
    case 'social-qr':
      return <SocialQRLayout slide={slide} />;
    case 'content':
    default:
      return <ContentLayout slide={slide} />;
  }
};

export default SlideRenderer;