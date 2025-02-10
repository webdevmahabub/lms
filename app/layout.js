import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Green Learning by GreenViewSoft",
  description: "Developed by Mahabub",
};

const poppins = Inter({subsets: ['latin'], variable: "--font-poppins"});

export default async function RootLayout({ children }) {

  const conn = await dbConnect();
  // console.log(conn)
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased, poppins.className`) }
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
