import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dewanta Rahma Satria — Software Engineer & UX Designer",
  description:
    "Portfolio Dewanta Rahma Satria — Software Engineer dan UX Designer yang berspesialisasi dalam pengembangan web dan mobile.",
  keywords: ["Software Engineer", "UX Designer", "Web Developer", "Mobile Developer", "Portfolio"],
  authors: [{ name: "Dewanta Rahma Satria" }],
  openGraph: {
    title: "Dewanta Rahma Satria — Software Engineer & UX Designer",
    description: "Portfolio profesional Dewanta Rahma Satria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
