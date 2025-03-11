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
  title: "Doubling Salary Calculator | Track Your Career Growth",
  description: "Calculate how many times your salary has doubled since starting your career. A better way to track career growth than absolute numbers or percentages.",
  keywords: "salary calculator, career growth, salary doubling, financial tracking, career progression, income growth",
  authors: [{ name: "Doubling Calculator Team" }],
  openGraph: {
    title: "Doubling Salary Calculator | Track Your Career Growth",
    description: "Calculate how many times your salary has doubled since starting your career. A better way to track career growth than absolute numbers or percentages.",
    url: "https://doubling-calculator.vercel.app",
    siteName: "Doubling Salary Calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doubling Salary Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doubling Salary Calculator | Track Your Career Growth",
    description: "Calculate how many times your salary has doubled since starting your career. A better way to track career growth than absolute numbers or percentages.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
