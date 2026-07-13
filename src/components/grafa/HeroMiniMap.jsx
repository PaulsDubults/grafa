import React from 'react';
import { motion } from 'framer-motion';
import ClientStatsChart from './ClientStatsChart';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/3fed02e2c_Screenshot2026-07-13at125249.png";

export default function HeroMiniMap() {
  const { t } = useI18n();

  return (
    <div>
      <p className="text-[11px] font-body text-[#08233E]/40 mb-3 italic">
        {t('miniMap.subtitle')}
      </p>

      <motion.div
        className="mb-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={MAP_IMAGE}
          alt="Latvijas karte ar klientu atrašanās vietām"
          className="w-full max-w-[480px] h-auto"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="max-w-[480px]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <ClientStatsChart />
      </motion.div>
    </div>
  );
}