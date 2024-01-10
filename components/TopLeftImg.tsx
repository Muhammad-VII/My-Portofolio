import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image quality={100} src={"/top-left-img.png"} width={400} height={400} alt={""} priority />
    </div>
  );
};

export default TopLeftImg;
