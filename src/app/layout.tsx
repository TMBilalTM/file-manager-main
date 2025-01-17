import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileBox",
  description: "FileBox is a seamless and secure file-sharing platform that allows users to upload, store, and share files effortlessly. Whether you're collaborating with colleagues or sharing personal files with friends, FileBox provides a fast, reliable, and intuitive solution to keep your data safe and accessible from anywhere. With robust privacy controls and easy-to-use features, managing your files has never been easier.",
  icons: {
    icon: "/favicon.ico", // Favicon dosyanızın yolu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
