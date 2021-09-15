import { FaGlobe, FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="fixed flex flex-col items-center justify-between w-full ">
      <nav className="flex items-center justify-between w-full px-5 py-1 font-thin text-white bg-black">
        <ul className="flex ">
          <li className="mr-5 ">Press</li>
          <li className="mr-5">Sds</li>
        </ul>
        <ul className="flex">
          <li className="mr-5">DE</li>
          <li className="mr-5">EN</li>
        </ul>
      </nav>

      <nav className="flex items-center justify-between w-full px-4 py-5 bg-white border-b border-gray-200">
        <ul className="flex">
          <li className="mr-5">
            <button>Experience Audi</button>
          </li>
          <li className="mr-5">
            <button>Company</button>
          </li>
          <li className="mr-5">
            <button>Careers</button>
          </li>
        </ul>

        <ul className="flex">
          <li className="mr-5">
            <FaSearch />
          </li>
          <li className="mr-5">
            <FaGlobe />
          </li>
        </ul>
      </nav>
    </header>
  );
};
