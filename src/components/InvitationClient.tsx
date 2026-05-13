"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./WelcomeScreen";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import StorySection from "./StorySection";
import RSVPSection from "./RSVPSection";
import GiftSection from "./GiftSection";
import ClosingSection from "./ClosingSection";

interface InvitationClientProps {
  guestName: string | null;
}

export default function InvitationClient({ guestName }: InvitationClientProps) {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scrolling when invitation is not opened
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }
  }, [isOpened]);

  return (
    <main className="relative min-h-screen bg-primary text-secondary overflow-hidden">
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
        className={`transition-opacity duration-1000 ${isOpened ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
      >
        <HeroSection />
        <StorySection />
        <ProfileSection />
        <EventSection />
        <GallerySection />
        <GiftSection />
        <RSVPSection />
        <ClosingSection />
      </div>
    </main>
  );
}
