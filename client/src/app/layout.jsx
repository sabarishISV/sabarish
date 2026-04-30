import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Sabarish – UI/UX Designer & Front-End Developer",
  description:
    "Premium portfolio of Sabarish – crafting visual-first digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0B0B0B] antialiased">
        {children}
      </body>
    </html>
  );
}