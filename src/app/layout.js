import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrackWise",
  description: "AI Driven Expense Management",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishableKey = { process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_bm92ZWwtZ2F0b3ItMzAuY2xlcmsuYWNjb3VudHMuZGV2JA' }>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  );
}
