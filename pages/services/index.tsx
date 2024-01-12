// componenets
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import stylesModule from './styles.module.css'
// variants
import { fadeIn } from "@/variants";

// framer motion
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className={stylesModule.about_page}>
      <div className={stylesModule.f_child}>
      <Circles />
      <div className="container mx-auto">
        <div className={stylesModule.s_child}>
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              alias laudantium consequatur tempora quia explicabo quo tempore
              labore saepe, eaque autem? Et sequi eum excepturi eligendi itaque
              deserunt labore sapiente.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
    </div>
  );
};

export default Services;
