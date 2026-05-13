"use client";

import { motion } from "framer-motion";
import { Copy, Check, Gift } from "lucide-react";
import { useState } from "react";

export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts = [
    { name: "BCA", holder: "Aditya Qamara Putra", number: "1234567890" },
    { name: "Mandiri", holder: "Afifatus Zehro", number: "0987654321" },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Gift className="w-10 h-10 text-wood-light" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-wood-light mb-6"
        >
          Kado Pernikahan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-secondary/60 mb-12"
        >
          Kehadiran Anda adalah kado terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui dompet digital di bawah ini.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {accounts.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              className="bg-[#151515] border border-wood/20 p-6 rounded-2xl flex flex-col items-center"
            >
              <h3 className="font-serif text-2xl text-wood-light mb-2">{acc.name}</h3>
              <p className="text-secondary/60 text-sm mb-4">{acc.holder}</p>
              <div className="bg-primary px-4 py-3 rounded-lg w-full flex items-center justify-between mb-4 border border-white/5">
                <span className="font-mono text-lg tracking-widest">{acc.number}</span>
                <button
                  onClick={() => handleCopy(acc.number, idx)}
                  className="text-wood hover:text-wood-light transition-colors"
                  title="Salin nomor rekening"
                >
                  {copiedIndex === idx ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
