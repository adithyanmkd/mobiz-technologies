import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
