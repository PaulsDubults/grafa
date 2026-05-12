import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Thin line */}
        <div className="w-full h-[1px] bg-foreground/[0.06] mb-10" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-sm tracking-wide">
            GRĀFA
          </p>

          <p className="text-[12px] text-foreground/30 font-body tracking-wide">
            Grāmatvedība · Finanses · Apmācības
          </p>

          <p className="text-[11px] text-foreground/20 font-body">
            © {new Date().getFullYear()} SIA firma GRĀFA
          </p>
        </div>
      </div>
    </footer>
  );
}