import React, { useEffect, useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAngular,
  FaAws,
  FaSass,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiFirebase,
  SiThreedotjs,
  SiTypescript,
  SiJquery,
  SiGithub,
  SiIonic,
  SiJira,
  SiNx
} from "react-icons/si";

// components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// counter
import CountUp from "react-countup";
import DownloadResume from "@/components/DownloadResume";

// data
const aboutData: any = [
  {
    title: "Skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 key="htmlIcon" />,
          <FaCss3 key="css3Icon" />,
          <FaSass key="sassIcon" />,
          <SiJquery key=",jsIcon" />,
          <FaJs key=",jsIcon" />,
          <SiTypescript key=",jsIcon" />,
          <FaReact key="reactIcon" />,
          <SiNextdotjs key="nextjsIcon" />,
          <FaAngular key="angularIcon" />,
          <SiNx key="nxIcon" />,
          <SiIonic key="ionicIcon" />,
          <SiFramer key="framerIcon" />,
          <SiThreedotjs key="threejsIcon" />,
          <SiFirebase key="firebaseIcon" />,
          <FaAws key="awsIcon" />,
          <SiGithub key="awspayIcon" />,
          <FaFigma key="figmaIcon" />,
          <SiAdobexd key="adobexd3Icon" />,
          <SiJira key="jiraIcon" />,
        ],
      },
      // {
      //   title: "Backend Development",
      //   icons: [
      //     <FaNodeJs key="nodejsIcon" />,
      //     <SiMongodb key="mongoDbIcon" />,
      //     <SiNestjs key="nestjsIcon" />,
      //     <SiMicrosoftsqlserver key="microsoftsqlIcon" />,
      //     <SiMysql key="mysqlIcon" />,
      //     <SiAuth0 key="auth0Icon" />,
      //     <SiHeroku key="herokuIcon" />,
      //   ],
      // },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Full Stack Web Development Diploma - Route Academy",
        stage: "2021",
      },
      {
        title: "RXJS AND OBSERVABLES - Udemy",
        stage: "2022",
      },
      {
        title: "Google Analytics Certified Developer - Coursera",
        stage: "2022",
      },
      {
        title: "Google Cloud Platform Fundamentals - Coursera",
        stage: "2022",
      }
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Frontend Engineer - Kashier Payment solutions",
        stage: "2024 - Present",
      },
      {
        title: "Frontend Developer - Zedny Educational Service",
        stage: "2023 - 2024",
      },
      {
        title: "Frontend Developer - Maxim Investment group",
        stage: "2021 - 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            My journey in the world of web development has been a dynamic
            exploration of frontend technologies, and I specialize in harnessing
            the power of React and Angular, to build robust, scalable, and
            responsive user interfaces. From conceptualization to
            implementation, I am dedicated to delivering cutting-edge solutions
            that leave a lasting impact.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden sm:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} delay={1} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((items: any, itemsIndex: any) => {
              return (
                <div
                  key={itemsIndex}
                  className={`${
                    index === itemsIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-0`}
                  onClick={() => setIndex(itemsIndex)}
                >
                  {items.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item: any, itemIndex: any) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-4 mb-3 items-center text-white/60"
                >
                  {/* title */}

                  {index != 0 && (
                    <div className="font-light mb-2 md:mb-0 text-nowrap">
                      {item.title}
                    </div>
                  )}

                  {index != 0 && <div className="hidden md:flex">-</div>}
                  {item.stage && <div>{item.stage}</div>}
                  <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit={"hidden"}
                    className="grid grid-cols-7 grid-rows-2 gap-4 md:flex md:gap-x-4 flex-wrap"
                  >
                    {/* icons */}
                    {item.icons?.map((icon: any, itemIndex: any) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-4xl text-white hover:text-accent/100 transition-all"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      {showComponent && <DownloadResume />}
    </div>
  );
};

export default About;
