import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { VerticalLines } from "@/components/vertical-lines";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geist = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-three-nu-77.vercel.app/"),
  title: {
    default: "Joel C V | FullStack Developer",
    template: "%s | Joel C V",
  },
  description:
    "Portfolio of Joel C V — Full Stack developer crafting high-performance web apps, and seamless user experiences using React and Angular.",
  openGraph: {
    title: "Joel C V Portfolio",
    description:
      "Portfolio of Joel C V — Full Stack developer crafting high-performance web apps, and seamless user experiences using React and Angular.",
    url: "https://portfolio-three-nu-77.vercel.app/",
    siteName: "Joel C V Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, geist.variable)}>
      <body className={`${inter.variable} ${geist.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem enableColorScheme>
          <SpeedInsights/>
          <Analytics />
          <div className="min-h-screen w-full flex items-stretch px-2 md:px-0">
            <VerticalLines classname="left-0 md:block hidden" />
            <main className="min-h-screen flex flex-col h-full max-w-4xl w-full mx-auto border-x border-muted">
              <Header />
              <div className="grow">{children}</div>
              <Footer />
            </main>
            <VerticalLines classname="right-0 hidden md:block" />
            {/* <ViewTracker/> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
