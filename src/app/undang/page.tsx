"use client";

import { useState, useMemo } from "react";
import {
  Copy,
  Check,
  Send,
  Users,
  Link as LinkIcon,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GuestData {
  id: string;
  name: string;
  url: string;
  message: string;
}

export default function GenerateLinkPage() {
  const [namesInput, setNamesInput] = useState("");
  const [copiedStates, setCopiedStates] = useState<{
    [key: string]: "link" | "text" | null;
  }>({});

  const guests: GuestData[] = useMemo(() => {
    if (!namesInput.trim()) return [];

    return namesInput
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((name, index) => {
        const formattedNameForUrl = encodeURIComponent(
          name.replace(/\s+/g, "_"),
        );
        const url = `https://ifa-adit.vercel.app/untuk/${formattedNameForUrl}`;
        const message = `Assalamu’alaikum Warahmatullahi Wabarakatuh.

Tanpa mengurangi rasa hormat, perkenankan kami mengundang *${name}* untuk hadir di acara bahagia kami.

Detail informasi acara dapat diakses melalui link undangan berikut:
${url}

Kehadiran serta doa restu Anda sangat berarti bagi kami. Mohon maaf karena undangan ini hanya disampaikan secara digital.

Terima kasih atas perhatiannya.

Salam Hormat,
*ADIT & IFA*`;

        return {
          id: `${index}-${name}`,
          name,
          url,
          message,
        };
      });
  }, [namesInput]);

  const handleCopy = async (
    id: string,
    type: "link" | "text",
    content: string,
  ) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedStates((prev) => ({ ...prev, [id]: type }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: null }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleSendWhatsApp = (message: string) => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-primary text-secondary font-sans relative overflow-x-hidden selection:bg-wood selection:text-white">
      {/* Background with blur effect similar to WelcomeScreen */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/Hero.jpeg')] bg-cover bg-center opacity-10 blur-xl scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-[#1a1a1a]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs font-sans text-wood-light">
            Sistem Manajemen Undangan
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
            Batch Generator
          </h1>
          <p className="text-secondary/60 max-w-2xl mx-auto font-light leading-relaxed">
            Masukkan daftar nama tamu Anda di bawah ini, setiap baris untuk satu
            nama. Sistem akan secara otomatis membuatkan tautan unik dan pesan
            undangan personal untuk masing-masing tamu sekaligus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-wood-light" />
            <h2 className="text-lg font-medium text-white">Daftar Nama Tamu</h2>
          </div>
          <textarea
            placeholder="Ketik atau paste nama-nama tamu di sini...&#10;"
            value={namesInput}
            onChange={(e) => setNamesInput(e.target.value)}
            className="w-full h-48 md:h-64 bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-wood-light/50 transition-all resize-y font-sans"
          />
          <div className="mt-3 flex justify-between items-center text-xs text-white/50">
            <span>{guests.length} tamu terdeteksi</span>
            <span>Pisahkan nama menggunakan Enter (baris baru)</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          <AnimatePresence>
            {guests.map((guest, index) => (
              <motion.div
                key={guest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 hover:border-wood/30 rounded-2xl p-6 backdrop-blur-sm transition-all group">
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div className="flex-1 space-y-3 min-w-0">
                    <h3 className="font-serif text-2xl text-wood-light truncate">
                      {guest.name}
                    </h3>

                    <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3 border border-white/5">
                      <LinkIcon className="w-4 h-4 text-white/40 shrink-0" />
                      <p className="text-sm text-white/70 truncate flex-1 font-mono">
                        {guest.url}
                      </p>
                      <button
                        onClick={() => handleCopy(guest.id, "link", guest.url)}
                        className="shrink-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer">
                        {copiedStates[guest.id] === "link" ? (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        {copiedStates[guest.id] === "link"
                          ? "Tersalin"
                          : "Salin Link"}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <button
                      onClick={() =>
                        handleCopy(guest.id, "text", guest.message)
                      }
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer">
                      {copiedStates[guest.id] === "text" ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <MessageSquare className="w-4 h-4" />
                      )}
                      {copiedStates[guest.id] === "text"
                        ? "Pesan Tersalin"
                        : "Salin Pesan"}
                    </button>

                    <button
                      onClick={() => handleSendWhatsApp(guest.message)}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-lg shadow-green-900/20 cursor-pointer">
                      <Send className="w-4 h-4" />
                      Kirim WA
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {guests.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border-2 border-dashed border-white/10 rounded-3xl">
              <Users className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/40 font-light">
                Belum ada daftar tamu yang dimasukkan.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
