import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";

interface WelcomeScreenProps {
  guestName: string | null;
  onOpen: () => void;
}

export default function WelcomeScreen({ guestName, onOpen }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-secondary"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-wood-dark opacity-20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-wood opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs font-sans text-wood-light mb-6"
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-5xl md:text-6xl mb-12"
        >
          Aditya & Afifatus
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-12 w-full"
        >
          <p className="text-sm font-sans text-white/60 mb-2">Yth. Bapak/Ibu/Saudara/i,</p>
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg py-4 px-6 inline-block min-w-[200px]">
            <p className="font-serif text-xl">
              {guestName ? decodeURIComponent(guestName).replace(/[-_]/g, " ") : "Tamu Kehormatan"}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative w-full sm:w-auto flex justify-center mt-4"
        >
          {/* Efek cincin cahaya berdenyut di belakang */}
          <div className="absolute inset-0 rounded-full bg-wood-light/20 blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
          
          <button
            onClick={onOpen}
            className="group relative flex items-center justify-center gap-4 w-full sm:w-auto overflow-hidden rounded-full border border-wood/50 bg-[#151515]/80 backdrop-blur-md px-10 py-5 font-sans transition-all duration-700 hover:bg-wood hover:border-wood-light hover:shadow-[0_0_40px_rgba(160,111,65,0.4)] active:scale-95 cursor-pointer"
          >
            {/* Efek kilauan kaca melintas (Glass reflection sweep) */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-150%)] group-hover:[transform:skew(-13deg)_translateX(150%)] transition-transform duration-1000 ease-in-out">
              <div className="h-full w-8 bg-white/20 blur-sm" />
            </div>
            
            <MailOpen className="w-5 h-5 text-wood-light group-hover:text-white transition-all duration-500 relative z-10 group-hover:-rotate-12 group-hover:scale-110" />
            
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-secondary group-hover:text-white uppercase transition-colors duration-500 relative z-10">
              Buka Undangan
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
