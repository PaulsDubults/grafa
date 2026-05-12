import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-10 border-t border-foreground/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-foreground/30 font-body">
          © {new Date().getFullYear()} SIA firma GRĀFA.<br className="md:hidden" />
          <span className="hidden md:inline"> </span>Visas tiesības aizsargātas.
        </p>
        <div className="flex gap-6">
          <span className="text-[11px] text-foreground/25 font-body">Privātuma politika</span>
          <span className="text-[11px] text-foreground/25 font-body">Sīkdatņu politika</span>
        </div>
      </div>
    </footer>
  );
}