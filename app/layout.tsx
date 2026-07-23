import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
const manrope=Manrope({subsets:["latin"],variable:"--font-sans",weight:["400","500","600","700","800"]});
export const metadata: Metadata={metadataBase:new URL(site.url),title:{default:"Telamon Consulting | Microsoft automation & AI",template:"%s | Telamon Consulting"},description:"Secure Microsoft automation, AI and business systems for growing organisations.",openGraph:{type:"website",siteName:site.name},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={manrope.variable}><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
