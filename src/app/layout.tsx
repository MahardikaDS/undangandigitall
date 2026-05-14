import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ifa-adit.vercel.app'),
  title: "Pernikahan Adit & Ifa",
  description: "Anda diundang untuk merayakan hari bahagia kami.",
  openGraph: {
    title: "Pernikahan Adit & Ifa",
    description: "Anda diundang untuk merayakan hari bahagia kami.",
    url: "https://ifa-adit.vercel.app",
    siteName: "Pernikahan Adit & Ifa",
    images: [
      {
        url: "/images/Hero.jpeg",
        width: 800,
        height: 600,
        alt: "Pernikahan Adit & Ifa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#1a1a1a] text-[#f5f5f5] font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
