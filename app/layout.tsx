import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/providers/theme-provider";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "SoftSell - Sell Your Software Licenses Efficiently";
  const description =
    "SoftSell helps you quickly and easily sell your unused software licenses for the best price. Upload license, get valuation, get paid.";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "SoftSell",
      title,
      description,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <ThemeProvider>
        <body
          className={`${inter.className} min-h-dvh antialiased flex flex-col`}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <ChatWidget />
        </body>
      </ThemeProvider>
    </html>
  );
}
