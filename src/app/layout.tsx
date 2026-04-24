import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LabShare — Rent laboratory equipment in the UK",
  description:
    "LabShare is a UK marketplace for renting specific laboratory equipment — bioreactors, mass spectrometers, 3D printers and more — by the day from scientists and shared labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body
        className={`${bricolage.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
