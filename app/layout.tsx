import type {} from "next";
import { Nav } from "@/components/nav";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Inter } from "@next/font/google";
import { Container } from "@/components/container";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "React Contributors",
    template: "%s | React Contributors",
  },
  description: "An overview of all React Contributors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Nav />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
