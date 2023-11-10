import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

<link rel="icon" href="/favicon.svg" sizes="any" />;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEN_Z BAGER",
  description:
    "Welcome to our ultimate platform for users seeking valuable data through the simplicity of asking questions. With our user-friendly interface and powerful search capabilities, you can effortlessly inquire about a wide range of datasets, uncover hidden insights, and explore a world of information.",
  icons: {
    icon: "/assets/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
