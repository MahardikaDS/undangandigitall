import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function StorySection() {
  return (
    <section className="relative py-32 px-6 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'url("/images/wood.png")', backgroundSize: 'cover' }}></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <Quote className="w-12 h-12 text-wood-light opacity-50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-xl md:text-2xl leading-relaxed text-secondary/90 italic"
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-wood tracking-[0.2em] text-sm uppercase font-semibold"
        >
          QS. Ar-Rum: 21
        </motion.div>
      </div>
    </section>
  );
}
