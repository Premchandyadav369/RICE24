'use client';

import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function AtelierHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Projects', 'Expertise', 'Studio', 'Insights'];
  const mobileNavLinks = ['Projects', 'Expertise', 'Studio', 'Insights', 'Reach Out'];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <header className="w-full flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
          {/* Left Side: Logo + Desktop Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="#"
              className="text-white font-semibold text-lg tracking-tight font-sans cursor-pointer"
            >
              Atelier
            </a>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side: Links, Button & Mobile Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="#reach-out"
              className="hidden md:block text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
            >
              Reach Out
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Animated Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-[6px] focus:outline-none cursor-pointer z-50"
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
            UX <span className="italic font-instrument-serif">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif">for</span> BOLD
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
            <a
              href="#cases"
              className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-all duration-200"
            >
              <span>See Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Secondary Action Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Reel</span>
            </button>
          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-between transition-all duration-700 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-6 md:px-12 py-5 md:py-6">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold text-lg tracking-tight font-sans"
          >
            Atelier
          </a>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col justify-center items-end w-8 h-8 gap-[6px] focus:outline-none cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-white rounded-full translate-y-[8px] rotate-45 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
            <span className="w-4 h-[2px] bg-white rounded-full opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
            <span className="w-6 h-[2px] bg-white rounded-full -translate-y-[8px] -rotate-45 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]" />
          </button>
        </div>

        {/* Stacked Nav Links */}
        <div className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
          {mobileNavLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${150 + index * 80}ms` : '0ms',
              }}
              className={`block text-center text-4xl sm:text-5xl font-instrument-serif text-white border-b border-white/10 py-4 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] hover:pl-4 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {item}
            </a>
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
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-white text-black font-sans font-medium text-base rounded-full py-4 text-center hover:bg-white/90 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
