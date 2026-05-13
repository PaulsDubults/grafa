import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-foreground/[0.06]" style={{ background: '#faf7f2' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-[11px] text-foreground/30 font-body leading-relaxed">
            © 2025 SIA firma GRĀFA
          </p>
          <p className="text-[10px] text-foreground/20 font-body">
            Visas tiesības aizsargātas.
          </p>
        </div>
        <div className="flex gap-6">
          <span className="text-[11px] text-foreground/25 font-body cursor-pointer hover:text-foreground/40 transition-colors">
            Privātuma politika
          </span>
          <span className="text-[11px] text-foreground/25 font-body cursor-pointer hover:text-foreground/40 transition-colors">
            Sīkdatņu politika
          </span>
        </div>
      </div>
    </footer>
  );
}