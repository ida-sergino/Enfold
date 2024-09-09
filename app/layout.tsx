import type { Metadata } from "next";
import Navbar from "./components/page/layout/Navbar/Navbar";
import Footer from "./components/page/layout/Footer/Footer";
import './typography.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Enfold",
  description: "Making complex operations seamless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
