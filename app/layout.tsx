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
  title: "Uzair Abdullah — Junior Frontend Engineer",
  description: "Personal developer portfolio of Uzair Abdullah, Junior Frontend Engineer specializing in Next.js, React, TypeScript, and AI-assisted workflows.",
  keywords: [
    "Uzair Abdullah",
    "Junior Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Roku TV Developer",
    "AI-Assisted Workflows"
  ],
  authors: [{ name: "Uzair Abdullah" }],
  openGraph: {
    title: "Uzair Abdullah — Junior Frontend Engineer",
    description: "Building modern, production-grade web experiences with React, Next.js, TypeScript, and AI-assisted engineering workflows.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
  }
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0D0D11] text-[#F3F3F6]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
