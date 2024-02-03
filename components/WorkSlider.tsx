import Image from "next/image";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "https://maxim-mig.netlify.app/",
          path: "/maxim_project.jpg",
        },
        {
          title: "https://hoobank-landing-ten.vercel.app/",
          path: "/hoo_bank.jpg",
        },
        {
          title: "https://zedny.com/",
          path: "/zedny_project.jpg",
        },

        {
          title: "https://my-city-elshorouk.web.app/",
          path: "/my_city.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "https://hotelhub.ae/",
          path: "/hotel_hub_project.jpg",
        },
        {
          title:
            "https://www.kempinski.com/en/royal-maxim-palace-kempinski-cairo/overview",
          path: "/kempneski_project.jpg",
        },
        {
          title: "https://maximmalls.com/#/",
          path: "/maxim_mall_project.jpg",
        },
        {
          title: "https://www.iskander-lbc.com/",
          path: "/iskander_lbc.jpg",
        },
      ],
    },
  ],
};

// import swiper react componenets
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      mousewheel
      // autoplay
      modules={[Pagination, Autoplay, Mousewheel]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide: any, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <Link href={image.title} target="_blank">
                      <div
                        className="flex items-center justify-center relative overflow-hidden group"
                        key={index}
                      >
                        {/* image */}
                        <Image
                          quality={100}
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlay gradiant */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title port 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title port 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
