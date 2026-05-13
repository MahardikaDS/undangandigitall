import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Hero.jpeg"
          alt="Alex & Sarah"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-sm text-wood-light mb-8"
        >
          Kami Akan Menikah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl text-secondary drop-shadow-2xl mb-8"
        >
          Adit & Ifa
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-[1px] h-24 bg-wood-light/50 my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-lg tracking-widest text-secondary/80 font-light"
        >
          01 . 06 . 2026
        </motion.p>
      </div>
    </section>
  );
}
