import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface Wish {
  name: string;
  message: string;
  date: string;
}

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // GANTI STRING KOSONG INI DENGAN URL DARI GOOGLE APPS SCRIPT ANDA
  // Contoh: "https://script.google.com/macros/s/AKfycby.../exec"
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwLX4zZ7sDNUusUZi7jZ9TimTMMNvvKPHuhM9xoF4uivM3Imd8UDvC9zAB0Ie1b6wyTHQ/exec";

  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Keluarga Besar Budi",
      message:
        "Barakallahulakum wa baraka 'alaikum. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      date: "Sistem: Belum Terhubung Google Sheet",
    },
  ]);

  // Ambil data dari Google Sheet saat website pertama kali dibuka
  useEffect(() => {
    const fetchWishes = async () => {
      if (!GOOGLE_SCRIPT_URL) return;
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();
        if (data && data.length > 0) {
          setWishes(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data ucapan:", error);
      }
    };

    fetchWishes();
  }, [GOOGLE_SCRIPT_URL]);

  const handleSendWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setIsLoading(true);

    if (GOOGLE_SCRIPT_URL) {
      // 1. Mode Google Sheet: Kirim data ke Cloud
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({ name, message }),
          // mode no-cors terkadang diperlukan untuk mencegah masalah CORS di browser
          mode: "no-cors",
        });

        // Update langsung di UI lokal agar tidak perlu menunggu reload
        const newWish = { name, message, date: "Baru saja" };
        setWishes([newWish, ...wishes]);
      } catch (error) {
        alert("Maaf, terjadi kesalahan saat mengirim pesan.");
      }
    } else {
      // 2. Mode Fallback: Jika belum ada URL Google Sheet, kirim pakai WhatsApp & LocalStorage
      const newWish = { name, message, date: "Baru saja (Lokal)" };
      setWishes([newWish, ...wishes]);

      const phoneNumber = "6281234567890";
      const whatsappMsg = `Assalamu'alaikum.\n\nSaya ${name}, ingin memberikan ucapan untuk pernikahan Adit & Ifa:\n\n"${message}"`;
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`,
        "_blank",
      );
    }

    setName("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-[#151515]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-wood-light mb-4">
            Buku Tamu & Ucapan
          </h2>
          <p className="text-secondary/60">
            Tinggalkan doa dan ucapan manis Anda untuk kedua mempelai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2">
            <form
              onSubmit={handleSendWish}
              className="space-y-6 bg-primary p-8 rounded-3xl border border-wood/20 sticky top-24">
              <div>
                <label className="block text-sm text-secondary/80 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:border-wood transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm text-secondary/80 mb-2">
                  Ucapan & Doa
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:border-wood transition-colors resize-none"
                  placeholder="Tuliskan ucapan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-wood text-white py-4 rounded-xl font-medium hover:bg-wood-light transition-colors flex items-center justify-center gap-2 group disabled:opacity-50">
                <Send
                  className={`w-4 h-4 transition-transform ${!isLoading && "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
                />
                {isLoading ? "Mengirim..." : "Kirim Ucapan"}
              </button>
            </form>
          </motion.div>

          {/* Messages Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {wishes.map((wish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-primary/50 border border-white/5 p-6 rounded-2xl flex gap-4">
                <div className="w-10 h-10 rounded-full bg-wood/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-wood-light" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="font-serif text-lg text-wood-light">
                      {wish.name}
                    </h4>
                    <span className="text-xs text-secondary/40">
                      {wish.date}
                    </span>
                  </div>
                  <p className="text-secondary/80 text-sm leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
