import "../styles/globals.css";
import { AppProps } from "next/app";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Akmal's Portfolio",
    template: "Akmal's Portfolio",
  },
  keywords: "Akmal, Portfolio, Web Developer",
  description: 'This is Mohammed Akmal Portfolio which is made with Next.js and Tailwind CSS',
}
// pages
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
