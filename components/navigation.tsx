import Link from "next/link";
import { MailButton, LinkedinButton } from "./outlined-button";
import MenuButton from "./menu/menu-button";

interface NavigationProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  menuIsOpen,
  setMenuIsOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-30 flex w-full items-center px-5 py-3 drop-shadow-[0_1px_0px_rgba(0,0,0,0.12)] transition lg:py-5 ${
        menuIsOpen ? "bg-[#1F2229]" : "bg-[#1F2229] bg-opacity-95 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex w-full justify-between lg:grid lg:w-11/12 lg:grid-cols-3">
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/">
            <a className="text-base font-bold leading-6 text-white transition duration-300 hover:text-blue-600">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-bold leading-6 text-white transition duration-300 hover:text-blue-600">
              About
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className="flex h-full flex-col justify-center">
            <span className="block text-lg font-black leading-7 text-white lg:mb-1 lg:text-center lg:text-xl">
              Sangeeth Kumar
            </span>
            <span className="block text-xs font-normal leading-4 text-white lg:text-center">
              User Experience Designer
            </span>
          </a>
        </Link>
        <div className="flex items-center justify-end gap-4">
          <a href="mailto:e.sangeethkumar@gmail.com">
            <MailButton />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/esangeeth/"
            rel="noopener noreferrer"
          >
            <LinkedinButton />
          </a>
          <span className="lg:hidden">
            <MenuButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
