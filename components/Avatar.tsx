import Image from "next/image";
import avatar from '@/public/avatar.png'
const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image placeholder="blur" quality={100} priority src={avatar} width={737} height={737} alt="avatar" className="translate-z-0 w-full h-full"/>
  </div>;
};

export default Avatar;
