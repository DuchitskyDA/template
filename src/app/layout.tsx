import type { Metadata } from "next";
import { Nunito_Sans as FontNunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/ui/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nunito = FontNunito({
  subsets: ["latin"],
  variable: "--fonts-nunito",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          nunito.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
