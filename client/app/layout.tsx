import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ScrollEffects } from "@/components/scroll-effects";
import { TopNavBar } from "@/components/top-nav-bar";
import { Footer } from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Touree | Premium Travel Experiences",
  description:
    "Find tours and travel packages easily, anytime, anywhere with Touree's curated luxury collections.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#b52330",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} light bg-background`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
        <ScrollEffects />
        <TopNavBar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
