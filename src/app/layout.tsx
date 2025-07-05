import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

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
  title: {
    default: "Shoeb Uddin - Frontend Developer & Full-Stack Engineer",
    template: "%s | Shoeb Uddin - Developer Portfolio",
  },
  description:
    "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio featuring interactive 3D projects, SaaS applications, and responsive web solutions built with cutting-edge technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Full-Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "UI/UX Developer",
    "Portfolio",
    "Shoeb Uddin",
    "Three.js Developer",
    "Django Developer",
    "SaaS Developer",
    "Business Directory App",
    "Interactive 3D Games",
    "Modern Web Applications",
  ],
  authors: [{ name: "Shoeb Uddin", url: "https://github.com/SD-CODE-OEB" }],
  creator: "Shoeb Uddin",
  publisher: "Shoeb Uddin",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shoeb Uddin - Frontend Developer & Full-Stack Engineer",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio featuring interactive 3D projects, SaaS applications, and responsive web solutions built with cutting-edge technologies.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",
    siteName: "Shoeb Uddin - Developer Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Shoeb Uddin - Frontend Developer Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoeb Uddin - Frontend Developer & Full-Stack Engineer",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@ushoeb944",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
        <StructuredData />
        {/* <SplashCursor /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
