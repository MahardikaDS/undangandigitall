"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Disc3 } from "lucide-react";
import WelcomeScreen from "./WelcomeScreen";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import StorySection from "./StorySection";
import RSVPSection from "./RSVPSection";
import ClosingSection from "./ClosingSection";

interface InvitationClientProps {
  guestName: string | null;
}

export default function InvitationClient({ guestName }: InvitationClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Prevent scrolling when invitation is not opened
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);

      // Automatis putar lagu saat undangan dibuka
      if (audioRef.current) {
        audioRef.current.volume = 0.5; // Set volume 50%
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) =>
            console.log("Autoplay was prevented by browser:", err),
          );
      }
    }
  }, [isOpened]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
      }
    }
  };

  return (
    <main className="relative min-h-screen bg-primary text-secondary overflow-hidden">
      {/* Background Music Player */}
      <audio ref={audioRef} src="/audio/lagu.mp3" loop preload="auto" />

      <AnimatePresence mode="wait">
        {!isOpened && (
          <WelcomeScreen
            key="welcome"
            guestName={guestName}
            onOpen={() => setIsOpened(true)}
          />
        )}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
        <HeroSection />
        <StorySection />
        <ProfileSection />
        <EventSection />
        <GallerySection />
        <RSVPSection />
        <ClosingSection />
      </div>

      {/* Floating Music Button */}
      <AnimatePresence>
        {isOpened && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 1, type: "spring" }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 p-3 bg-[#151515]/80 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(160,111,65,0.3)] text-wood-light border border-wood/30 hover:bg-wood hover:text-white transition-all duration-300"
            aria-label="Toggle Music">
            <div className="relative flex items-center justify-center">
              {isPlaying && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-wood-light opacity-20 animate-ping"></span>
              )}
              <Disc3
                className={`w-6 h-6 ${isPlaying ? "animate-spin" : ""}`}
                style={{ animationDuration: "3s" }}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
