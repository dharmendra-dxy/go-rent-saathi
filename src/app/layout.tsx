import type { Metadata, Viewport } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Go Rent Saathi',
  description: 'Manage your brokrage portal',
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon/light.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/favicon/dark.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //   ],
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.className} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider></body>
        <Toaster richColors position="top-center"/>
    </html>
  );
}
