import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function ClosingSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Hero.jpeg"
          alt="Closing"
          fill
          className="object-cover object-center opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="font-sans text-sm tracking-widest text-secondary/60 mb-8"
        >
          TERIMA KASIH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-wood-light mb-8"
        >
          Aditya & Afifatus
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-md text-secondary/80 leading-relaxed font-light italic mb-8"
        >
          Kami sangat bersyukur atas doa dan restu Anda. Kami tidak sabar untuk berbagi hari istimewa kami dengan Anda.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-xl text-wood italic"
        >
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </motion.p>
      </div>

      {/* Professional Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
      >
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="text-[10px] sm:text-xs font-sans tracking-widest text-secondary/50 flex items-center gap-1.5 uppercase">
            Built with 
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-wood-light animate-pulse" fill="currentColor" /> 
            by 
            <a 
              href="https://github.com/RuangMahardika" 
              target="_blank" 
              rel="noreferrer"
              className="font-bold text-wood hover:text-white transition-colors relative group ml-1"
            >
              RuangMahardika
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood-light group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
