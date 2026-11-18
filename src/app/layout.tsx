import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "./loading";
import { Poppins, Jockey_One } from "next/font/google";
import { Suspense } from "react";

// Load fonts using Next.js font optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const jockeyOne = Jockey_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jockey",
});

export const metadata = {
  title: "Reunyte",
  description: "Think Ahead. Build Bold. Shape the Future",
  icons: {
    icon: [
      {
        url: "/assets/images/reunyte-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jockeyOne.variable}`}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
