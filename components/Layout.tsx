import { Sora } from "next/font/google";
import type { Metadata } from "next";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sore",
});

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

export const metadata: Metadata = {
  title: "Akmal Portfolio",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://my-portofolio-3scizhrwo-mohammed-akmals-projects.vercel.app/work"),
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
