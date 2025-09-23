import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CFA FRM Jobs - Finance Career Platform",
  description:
    "A platform for finance professionals (CFA, FRM, CA, MBA) to find opportunities and build community",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
