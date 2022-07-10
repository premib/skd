import Link from "next/link";

interface MenuProps {
  menuIsOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ menuIsOpen }) => {
  return (
    <div
      className={`fixed top-[68px] z-30 w-full bg-[#1F2229] pt-16 pb-20 pl-[23%] lg:hidden ${
        menuIsOpen ? "block " : "hidden"
      }`}
    >
      <ul className="space-y-10 marker:text-white">
        <li>
          <Link href="/">
            <a className="text-xl font-bold leading-7 tracking-[0.01em] text-white">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-xl font-bold leading-7 tracking-[0.01em] text-white">
              About
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/">
            <a className="text-xl font-bold leading-7 tracking-[0.01em] text-white">
              Resume
            </a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Menu;
