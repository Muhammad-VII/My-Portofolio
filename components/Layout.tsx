import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sore",
});

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
 
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Layout;
