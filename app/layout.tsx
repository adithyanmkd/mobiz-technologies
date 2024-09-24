import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { PrimeReactProvider } from "primereact/api";

import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

import Footer from "./components/main/Footer";
import Navbar from "./components/main/Navbar";

export const metadata: Metadata = {
  title: "Mobiz Technologies",
  description: "Mobiz Technologies",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#FFFFFB]`}>
        <PrimeReactProvider>
          <Navbar />
        </PrimeReactProvider>

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
