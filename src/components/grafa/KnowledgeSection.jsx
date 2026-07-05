import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';
import DecorativeAsset from './DecorativeAsset';

const articles = [
  {
    title: "Kā izvēlēties grāmatvedi?",
    category: "Padomi",
    excerpt: "Kas jāņem vērā, izvēloties grāmatvedības pakalpojumu sniedzēju savam uzņēmumam.",
  },
  {
    title: "Nodokļu izmaiņas 2025. gadā",
    category: "Jaunumi",
    excerpt: "Būtiskākās nodokļu likumdošanas izmaiņas, kas ietekmē uzņēmējus.",
  },
  {
    title: "Finanšu plānošana mazajiem uzņēmumiem",
    category: "Finanšu padomi",
    excerpt: "Praktiski ieteikumi budžeta veidošanai un naudas plūsmas pārvaldīšanai.",
  },
];

export default function KnowledgeSection() {
  return (
    <motion.section
      id="zinasanu-telpa"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f5f0e8' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="approach" />

      <DecorativeAsset asset="pyramid" className="hidden lg:block -left-4 top-16 w-[320px]" opacity={0.32} />
      <DecorativeAsset asset="pyramid" className="hidden lg:block right-0 bottom-16 w-[240px] rotate-[6deg]" opacity={0.25} />
      <DecorativeAsset asset="cloudPyramidCircle" className="hidden lg:block right-[10%] top-10 w-[200px]" opacity={0.28} />
      <DecorativeAsset asset="featherInk" className="hidden lg:block left-[18%] bottom-6 w-[240px] rotate-6" opacity={0.2} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Noderīgi materiāli
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            Zināšanu telpa
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
          <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.8] max-w-3xl mx-auto">
            Praktiski padomi, jaunumi un noderīga informācija par grāmatvedību, nodokļiem un finanšu pārvaldību.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              className="group bg-white/60 backdrop-blur-sm border border-[#e8e0d4]/40 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)] rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#c9a84c]/40 to-transparent" />
              
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <BookOpen className="w-4 h-4 text-[#c9a84c]" strokeWidth={1.5} />
                  <span className="text-[10px] font-body text-[#c9a84c] tracking-[0.2em] uppercase font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-heading text-[16px] md:text-[18px] font-semibold text-[#1e3a5f] mb-3 leading-snug group-hover:text-[#1e3a5f] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[#1e3a5f]/45 font-body text-[13px] md:text-[14px] leading-[1.75] mb-5">
                  {article.excerpt}
                </p>

                <span className="text-[12px] font-body text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-300 tracking-wider uppercase">
                  Drīzumā →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#1e3a5f]/35 font-body text-[13px] mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Šī sadaļa drīzumā tiks papildināta ar jauniem rakstiem un materiāliem.
        </motion.p>
      </div>
    </motion.section>
  );
}