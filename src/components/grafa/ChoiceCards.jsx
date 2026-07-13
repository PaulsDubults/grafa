import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ChoiceCards({ choices }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-[700px] mx-auto">
      {choices.map((choice, i) => (
        <motion.div
          key={choice.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
        >
          <Link
            to={choice.path}
            className="block bg-white/70 backdrop-blur-sm rounded-lg p-7 md:p-8 text-center cursor-pointer shadow-[0_2px_12px_rgba(30,58,95,0.04)] hover:shadow-[0_10px_36px_rgba(30,58,95,0.10)] hover:-translate-y-1.5 transition-all duration-500 border border-[#e8e0d4]/40 hover:border-[#C89B3C]/25 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
            <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#08233E] mb-2">
              {choice.label}
            </h3>
            {choice.desc && (
              <p className="font-body text-[12px] md:text-[13px] text-[#08233E] leading-[1.7]">
                {choice.desc}
              </p>
            )}
            <div className="w-8 h-[1.5px] mx-auto mt-5 transition-all duration-500 group-hover:w-14" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0)' }} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}