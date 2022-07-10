import Link from "next/link";
import Image from "next/image"

import downloadImage from "../public/images/download.svg"

interface DownloadButtonProps {
  textLabel: string;
  href: string;
  target: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  textLabel,
  href,
  target
}) => {
  return (
    <Link href={href}>
      <a
        role="button"
        target={target}
        className="inline-block w-full text-lg text-center rounded-lg pl-10 pr-5 py-3 border border-solid border-blue-700 border-2 lg:text-sm lg:w-1/2 text-blue-700 font-bold leading-5 tracking-[0.02em] text-white shadow-md transition lg:pl-10 lg:pr-6 lg:py-4 lg:text-base lg:tracking-[0.01em]"
      >
        {textLabel} 
        <Image 
          src={downloadImage}
          width="45%"
          height="15%"
          alt=""
        />
      </a>
    </Link>
  );
};

export default DownloadButton;
