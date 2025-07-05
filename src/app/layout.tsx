import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Portfolio - Shoeb Uddin",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          outfit.className,
          "flex flex-col justify-start items-center h-full w-full m-0 p-0 box-border bg-background text-foreground md:flex-row relative overflow-x-hidden"
        )}
      >
        {/* <SplashCursor /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
