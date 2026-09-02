'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Play,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  Check,
  ExternalLink,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

const FEATURED_CASES: CaseStudy[] = [
  {
    id: '01',
    title: 'Aura Spatial OS',
    category: 'Spatial Design & Next-Gen Interface',
    year: '2026',
    description:
      'Architected the spatial operating system for augmented reality headsets, pioneering gaze-and-pinch spatial navigation.',
    tags: ['VisionOS', 'Design System', '3D UI'],
  },
  {
    id: '02',
    title: 'Kroma Intelligence',
    category: 'Generative AI Platform & Brand',
    year: '2026',
    description:
      'Created an ultra-minimal, high-precision developer platform for multimodal intelligence with millisecond latency feedback.',
    tags: ['Product Design', 'Design Tokens', 'Web App'],
  },
  {
    id: '03',
    title: 'Verve Autonomous',
    category: 'In-Cabin Experience & Mobility',
    year: '2025',
    description:
      'Reimagined electric autonomous vehicle cockpit software with contextual micro-interactions and ambient lighting sync.',
    tags: ['Automotive UX', 'HMI', 'Design Strategy'],
  },
  {
    id: '04',
    title: 'Monolith Global',
    category: 'Fintech Infrastructure & Superapp',
    year: '2025',
    description:
      'Engineered a frictionless treasury management suite handling $14B+ in daily institutional volume with zero friction.',
    tags: ['Fintech', 'Mobile App', 'Design System'],
  },
];

export default function AtelierHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [casesDrawerOpen, setCasesDrawerOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState('Product Design');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [timeString, setTimeString] = useState('');

  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const reelVideoRef = useRef<HTMLVideoElement | null>(null);

  const navLinks = ['Projects', 'Expertise', 'Studio', 'Insights'];
  const mobileNavLinks = ['Projects', 'Expertise', 'Studio', 'Insights', 'Reach Out'];

  // Update live studio time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nyc = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const tyo = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTimeString(`NYC ${nyc} • TYO ${tyo}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Handle Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setReelModalOpen(false);
        setCasesDrawerOpen(false);
        setContactModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSound = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !bgVideoRef.current.muted;
      setIsMuted(bgVideoRef.current.muted);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@atelier.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleNavClick = (item: string) => {
    setMenuOpen(false);
    if (item === 'Projects') {
      setCasesDrawerOpen(true);
    } else if (item === 'Reach Out') {
      setContactModalOpen(true);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans select-none">
      {/* Background Video with Optical Subtle Gradient */}
      <video
        ref={bgVideoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Cinematic Vignette for maximum text clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Navbar */}
        <header className="w-full flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
          {/* Left Side: Logo + Desktop Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => {
                setCasesDrawerOpen(false);
                setContactModalOpen(false);
              }}
              className="text-white font-semibold text-lg tracking-tight font-sans cursor-pointer focus:outline-none flex items-center gap-2 group"
            >
              <span>Atelier</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Links, Button & Mobile Hamburger */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="hidden md:block text-white/80 hover:text-white text-sm font-light transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              Reach Out
            </button>
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="hidden md:inline-flex items-center justify-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
            >
              Let&apos;s Talk
            </button>

            {/* Mobile Animated Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-[6px] focus:outline-none cursor-pointer z-50 p-1"
            >
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen ? 'w-6 translate-y-[8px] rotate-45' : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen ? 'w-4 opacity-0 scale-x-0' : 'w-4'
                }`}
              />
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen ? 'w-6 -translate-y-[8px] -rotate-45' : 'w-6'
                }`}
              />
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center">
          {/* Main Heading */}
          <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl tracking-normal">
            UX <span className="italic font-instrument-serif font-normal">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif font-normal">for</span> BOLD
            <br />
            VENTURES
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
            We shape digital products that define brands{' '}
            <br className="hidden sm:block" />
            and unlock exponential growth.
          </p>

          {/* Buttons Row */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => setCasesDrawerOpen(true)}
              className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>See Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Secondary Action Button */}
            <button
              type="button"
              onClick={() => setReelModalOpen(true)}
              className="inline-flex items-center gap-2 border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Reel</span>
            </button>
          </div>
        </main>

        {/* Studio Status Bottom Bar (Award-winning agency polish) */}
        <footer className="w-full px-6 md:px-12 lg:px-16 py-4 md:py-6 flex items-center justify-between text-xs text-white/60 font-light border-t border-white/5 backdrop-blur-[2px]">
          {/* Availability badge */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="hidden sm:inline">Available for Q4/2026 Collaborations</span>
            <span className="sm:hidden">Available Q4/2026</span>
          </div>

          {/* Live Studio Coordinates / Times & Sound */}
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline text-white/40 tracking-wider">
              {timeString || 'NYC • TYO'}
            </span>

            {/* Ambient Sound Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Sound: OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400">Sound: ON</span>
                </>
              )}
            </button>
          </div>
        </footer>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-between transition-all duration-700 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-6 md:px-12 py-5 md:py-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold text-lg tracking-tight font-sans focus:outline-none"
          >
            Atelier
          </button>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col justify-center items-end w-8 h-8 gap-[6px] focus:outline-none cursor-pointer p-1"
          >
            <span className="w-6 h-[2px] bg-white rounded-full translate-y-[8px] rotate-45 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
            <span className="w-4 h-[2px] bg-white rounded-full opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
            <span className="w-6 h-[2px] bg-white rounded-full -translate-y-[8px] -rotate-45 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
          </button>
        </div>

        {/* Stacked Nav Links */}
        <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
          {mobileNavLinks.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              style={{
                transitionDelay: menuOpen ? `${150 + index * 80}ms` : '0ms',
              }}
              className={`block text-center text-4xl sm:text-5xl font-instrument-serif text-white border-b border-white/10 py-4 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] hover:pl-4 focus:outline-none w-full ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div
          style={{
            transitionDelay: menuOpen ? '550ms' : '0ms',
          }}
          className={`px-6 pb-8 pt-4 w-full max-w-md mx-auto transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setContactModalOpen(true);
            }}
            className="block w-full bg-white text-black font-sans font-medium text-base rounded-full py-4 text-center hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl shadow-white/5 cursor-pointer"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {/* Cinematic Showreel Theater Modal */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold text-sm tracking-widest uppercase font-sans">
                Atelier Showreel
              </span>
              <span className="text-white/40 text-xs">• 2026 Archive</span>
            </div>
            <button
              type="button"
              onClick={() => setReelModalOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Theater"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Reel Frame */}
          <div className="flex-1 flex items-center justify-center my-4">
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <video
                ref={reelVideoRef}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center text-xs text-white/40 font-light">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">ESC</kbd> to return
          </div>
        </div>
      )}

      {/* Featured Cases Showcase Drawer */}
      {casesDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex justify-end animate-in fade-in duration-300">
          <div
            className="w-full max-w-2xl bg-zinc-950 border-l border-white/10 h-full p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h2 className="font-instrument-serif text-3xl text-white">Selected Works</h2>
                  <p className="text-white/50 text-xs mt-1">Featured client case studies & ventures</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCasesDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cases List */}
              <div className="divide-y divide-white/10 mt-6">
                {FEATURED_CASES.map((item) => (
                  <div
                    key={item.id}
                    className="py-6 group hover:pl-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs text-white/40 mb-1">
                      <span>{item.id}</span>
                      <span>{item.year}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-instrument-serif text-2xl text-white group-hover:text-white/90">
                        {item.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-sm text-white/70 font-light mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs text-white/50">Ready to build your next venture?</span>
              <button
                type="button"
                onClick={() => {
                  setCasesDrawerOpen(false);
                  setContactModalOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors cursor-pointer"
              >
                <span>Initiate Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Concierge Modal ("Let's Talk" / "Reach Out") */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div
            className="w-full max-w-lg bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setContactModalOpen(false);
                setInquirySubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 mb-3">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Private Consultation</span>
              </div>
              <h2 className="font-instrument-serif text-3xl sm:text-4xl text-white">Let&apos;s Talk</h2>
              <p className="text-sm text-white/60 font-light mt-1">
                Tell us about your product roadmap and design ambitions.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-instrument-serif text-2xl text-white">Transmission Received</h3>
                <p className="text-sm text-white/60 mt-2 max-w-xs mx-auto font-light">
                  Our principal partners will review your brief within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactModalOpen(false);
                    setInquirySubmitted(false);
                  }}
                  className="mt-6 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {/* Direct email quick-copy card */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-white/40 uppercase tracking-wider">Direct Studio Line</div>
                    <div className="text-sm font-mono text-white mt-0.5">hello@atelier.design</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <span>Copy Email</span>
                    )}
                  </button>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-xs text-white/60 block mb-2 font-light">Primary Focus</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Product Design', 'Mobile Apps', 'Design Systems'].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`text-xs py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedService === service
                            ? 'bg-white text-black border-white font-medium'
                            : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick inquiry input */}
                <div>
                  <label className="text-xs text-white/60 block mb-1.5 font-light">Your Email or Telegram</label>
                  <input
                    type="text"
                    placeholder="partner@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 placeholder:text-white/30"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(true)}
                  className="w-full bg-white text-black font-medium text-sm rounded-full py-3 hover:bg-white/90 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-white/5 mt-2"
                >
                  Send Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
