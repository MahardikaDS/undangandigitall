"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function EventSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 01 Juni 2026 07:30 WIB
    const targetDate = new Date("2026-06-01T07:30:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("/images/wood.png")', backgroundSize: 'cover' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wood-light mb-4">Rangkaian Acara</h2>
          <p className="text-secondary/60 max-w-lg mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami untuk mengundang Anda hadir pada momen bahagia ini.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-20 text-center"
        >
          {Object.entries(timeLeft).map(([unit, value], index) => {
            const unitMap: Record<string, string> = { days: "Hari", hours: "Jam", minutes: "Menit", seconds: "Detik" };
            return (
              <div key={unit} className="flex flex-col items-center p-4 border border-wood/20 rounded-lg bg-white/5 backdrop-blur-sm">
                <span className="font-serif text-3xl md:text-5xl text-wood-light mb-2">{value}</span>
                <span className="text-xs uppercase tracking-widest text-secondary/60">{unitMap[unit]}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Events Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Holy Matrimony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-wood/20 rounded-2xl p-8 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center"
          >
            <h3 className="font-serif text-2xl text-wood-light mb-6">Akad Nikah</h3>
            <div className="space-y-4 text-secondary/80 mb-8 flex-grow">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wood" />
                Senin, 01 Juni 2026
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wood" />
                07.30 WIB - Selesai
              </p>
              <p className="flex items-center justify-center gap-2 max-w-xs mx-auto text-sm">
                <MapPin className="w-5 h-5 text-wood flex-shrink-0" />
                Gedung Merdeka, Jl. Letnan Soenarto No. 15, Bangkalan
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=Gedung+Merdeka+Bangkalan" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-wood text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-wood-light transition-colors w-full justify-center"
            >
              <MapPin className="w-4 h-4" /> Buka Peta
            </a>
          </motion.div>

          {/* Wedding Reception */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-wood/20 rounded-2xl p-8 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center"
          >
            <h3 className="font-serif text-2xl text-wood-light mb-6">Resepsi Pernikahan</h3>
            <div className="space-y-4 text-secondary/80 mb-8 flex-grow">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wood" />
                Senin, 01 Juni 2026
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wood" />
                10.00 WIB - Selesai
              </p>
              <p className="flex items-center justify-center gap-2 max-w-xs mx-auto text-sm">
                <MapPin className="w-5 h-5 text-wood flex-shrink-0" />
                Gedung Merdeka, Jl. Letnan Soenarto No. 15, Bangkalan
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=Gedung+Merdeka+Bangkalan" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-wood text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-wood-light transition-colors w-full justify-center"
            >
              <MapPin className="w-4 h-4" /> Buka Peta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
