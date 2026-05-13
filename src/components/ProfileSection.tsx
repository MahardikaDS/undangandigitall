import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="py-24 px-6 bg-[#151515] text-center">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-xl md:text-2xl text-wood mb-4 italic">
        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl text-wood-light mb-16">
        Mempelai Pria & Wanita
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 max-w-5xl mx-auto">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center">
          <div className="w-48 h-64 relative mb-8 rounded-t-full overflow-hidden border border-wood/30 group cursor-pointer">
            <Image
              src="/images/1.jpeg"
              alt="Alex"
              fill
              className="object-cover object-left transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">Aditya Qamara Putra</h3>
          <p className="text-secondary/60 text-sm mb-4">Putra Kedua dari</p>
          <p className="font-sans text-secondary/80">
            Bpk. Adi Guntoro & Ibu Nurhayati
          </p>
          <a
            href="https://www.instagram.com/adty_qmrp/"
            className="mt-6 text-wood-light text-sm tracking-widest uppercase hover:text-wood transition-colors">
            @adty_qmrp
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl font-serif text-wood-light opacity-50">
          &
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center">
          <div className="w-48 h-64 relative mb-8 rounded-t-full overflow-hidden border border-wood/30 group cursor-pointer">
            <Image
              src="/images/2.jpeg"
              alt="Sarah"
              fill
              className="object-cover object-right transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">Afifatus Zehro</h3>
          <p className="text-secondary/60 text-sm mb-4">Putri Pertama dari</p>
          <p className="font-sans text-secondary/80">
            Bpk. Hafied/Satud & Ibu Husnia
          </p>
          <a
            href="https://www.instagram.com/afftszhr_/"
            className="mt-6 text-wood-light text-sm tracking-widest uppercase hover:text-wood transition-colors">
            @afftszhr_
          </a>
        </motion.div>
      </div>
    </section>
  );
}
