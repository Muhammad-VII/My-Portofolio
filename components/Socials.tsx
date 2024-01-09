// next link
import Link from "next/link";
// icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookFill,
  RiFacebookBoxFill,
  RiPhoneFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/ngxakmal"}
        target="_blank"
        rel="noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>

      <Link
        href={"https://github.com/Muhammad-VII"}
        target="_blank"
        rel="noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>

      <Link
        href={"tel:+201012114928"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPhoneFill />
      </Link>
    </div>
  );
};

export default Socials;
