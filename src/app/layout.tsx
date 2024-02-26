import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Aher Web Developer",
  description:
    "Ayush Aher is an young and talented web developer as well as a Tech Consultant. Highly professional with ",
  keywords:
    "Ayush Aher, software developer,web developer, web developer in pune, tech consultant, tech consultant in pune, young developer, full stack web developer, c# developer, react developer, angular developer, docker enthusiast, linux enthusiast, devops enthusiast, git, github, nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Footer />
        </main>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1NNF6E3M0T"></Script>
        <Script src="/google-analytics.js"></Script>
      </body>
    </html>
  );
}
