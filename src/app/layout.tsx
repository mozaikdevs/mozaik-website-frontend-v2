import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Mozaik concepts",
  description: "Professional Office Interior Design & Space Planning",
};


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable}`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
