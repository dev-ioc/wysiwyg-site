import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "WYSIWYG",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WYSIWYG",
    url: "https://wysiwyg-website.onrender.com",
    logo: "https://wysiwyg-website.onrender.com/logo.png",
  };

  return (
    <html suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} ${workSans.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
