import React from 'react';
import InkLine from './InkLine';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12">
      <InkLine className="mb-10 max-w-xl mx-auto" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://media.base44.com/images/public/user_69ad5905a7e5b1a9d898e9ff/e04cddb52_Screenshot2026-05-12at112109.png" 
            alt="GRĀFA" 
            className="h-10 w-auto"
          />
        </div>

        <p className="text-sm text-muted-foreground font-body text-center">
          Grāmatvedība. Finanses. Apmācības.
        </p>

        <p className="text-xs text-muted-foreground/60 font-body">
          © {new Date().getFullYear()} SIA firma GRĀFA
        </p>
      </div>

      {/* Decorative feather line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />
    </footer>
  );
}