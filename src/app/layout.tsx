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
        title: "串かつ枡や | 湘南台の本格串かつ",
  description: "湘南台で本格的な串かつをお楽しみください。大阪仕込みの本格串かつと温かいおもてなしで、地元の方々に愛される居酒屋です。",
  keywords: "串かつ, 湘南台, 居酒屋, 大阪, 藤沢, 神奈川",
  openGraph: {
    title: "串かつ枡や | 湘南台の本格串かつ",
    description: "湘南台で本格的な串かつをお楽しみください。大阪仕込みの本格串かつと温かいおもてなしで、地元の方々に愛される居酒屋です。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
