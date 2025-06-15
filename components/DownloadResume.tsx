// generate next component to which is a button fixed to the page to download pdf from the public folder
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

interface DownloadResumeProps {
  right?: string;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ right = "48" }) => {
  return (
    <a
      href="/akmal_latest_resume.pdf"
      download="Akmal's Resume"
      className={`fixed bottom-28 right-${right} translate-x-[50%] md:right-16 md:bottom-12 md:translate-x-0 p-4 bg-accent/70 text-white rounded-full shadow-lg animate-pulse cursor-pointer z-50 hover:bottom-16 transition-all`}
    >
      <AiOutlineDownload size={24} />
    </a>
  );
};

export default DownloadResume;
