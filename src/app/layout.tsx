import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TopBar from "@/components/TopBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// NEXT_PUBLIC_SITE_URL is set once the real domain is connected. Until then,
// Vercel deployments fall back to the project's production URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Irish Ports",
    template: "%s | Irish Ports",
  },
  description:
    "Irish Ports is a leading trade organisation supporting Irish ports, freeports, marine, renewables, shipping, training, transport and research.",
  applicationName: "Irish Ports",
  openGraph: {
    type: "website",
    siteName: "Irish Ports",
    locale: "en_IE",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#082943",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IE" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <TopBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
