import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const photos = [
    { src: "/images/1.jpeg", style: "col-span-2 row-span-2 aspect-square" },
    { src: "/images/2.jpeg", style: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/3.jpeg", style: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/Hero.jpeg", style: "col-span-2 row-span-1 aspect-[2/1]" },
    { src: "/images/1.jpeg", style: "col-span-1 row-span-2 aspect-[1/2]" },
    { src: "/images/2.jpeg", style: "col-span-1 row-span-1 aspect-square" },
    { src: "/images/3.jpeg", style: "col-span-1 row-span-1 aspect-square" },
  ];

  return (
    <section className="py-24 px-6 bg-[#151515]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wood-light mb-4">Momen Kami</h2>
          <p className="text-secondary/60 max-w-lg mx-auto">
            Sekilas tentang perjalanan yang membawa kami ke hari bahagia ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${photo.style}`}
            >
              <Image
                src={photo.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${photo.src.includes('wood') ? 'opacity-80 mix-blend-screen' : 'grayscale hover:grayscale-0'}`}
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
