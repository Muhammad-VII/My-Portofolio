import "../styles/globals.css";
import { AppProps } from "next/app";
import dynamic from 'next/dynamic'
// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

// pages
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const DynamicComponent = dynamic(() => import("../components/Layout"));
  return (
    <DynamicComponent>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </DynamicComponent>
  );
}

export default MyApp;
