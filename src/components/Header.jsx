import { AiOutlineSearch } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="sticky flex flex-col items-center justify-between w-full">
      <nav className="flex items-center justify-between w-full px-5 py-1 font-thin text-white bg-black">
        <ul className="flex">
          <li className="mr-5 ">Press & Media Center</li>
          <li className="mr-5">Contact</li>
        </ul>
        <ul className="flex">
          <li className="mr-5">DE</li>
          <li className="mr-5">EN</li>
        </ul>
      </nav>

      <nav className="flex items-center justify-between w-full px-4 py-5 bg-white border-b border-gray-200">
        <ul className="flex ">
          <li className="mr-5">
            <button className="font-light">Experience Audi</button>
          </li>
          <li className="mr-5">
            <button className="font-light">Company</button>
          </li>
          <li className="mr-5">
            <button className="font-light">Careers</button>
          </li>
        </ul>

        <ul className="flex">
          <li className="mr-5">
            <AiOutlineSearch />
          </li>
          <li className="mr-5">
            <FiGlobe />
          </li>
        </ul>
      </nav>
    </header>
  );
};
