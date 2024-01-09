import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sore",
});

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Akmal's Portfolio" />
        <meta name="keywords" content="Akmal, Portfolio, Web Developer" />
        <meta name="author" content="Mohmmed Akmal" />
        <title>Akmal's Portfolio</title>
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Analytics />
    </div>
  );
};

export default Layout;
