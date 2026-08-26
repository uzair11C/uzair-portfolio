import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzair Abdullah // AI-Assisted Senior Frontend Engineer",
  description: "Scuderia Ferrari & Pit Wall Telemetry themed developer portfolio for Uzair Abdullah. Specializing in Next.js 16, TypeScript, Tailwind CSS, and AI-accelerated frontend architecture.",
  keywords: [
    "Uzair Abdullah",
    "Frontend Engineer",
    "Next.js Developer",
    "AI Frontend Developer",
    "TypeScript",
    "Tailwind CSS",
    "React Developer",
    "neofulkrum",
    "vendorIQ"
  ],
  authors: [{ name: "Uzair Abdullah" }],
  openGraph: {
    title: "Uzair Abdullah // AI-Assisted Senior Frontend Engineer",
    description: "Engineering high-velocity, pit-wall precise web architectures accelerated by advanced LLM workflows.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D11] text-[#F3F3F6]">
        {children}
      </body>
    </html>
  );
}
