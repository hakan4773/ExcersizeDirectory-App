import React from "react";
import { CiSearch } from "react-icons/ci";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";
function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col h-screen ">
      <header className="  from-gray-900 via-gray-800 to-blue-900 bg-gradient-to-br   py-6 px-2">
        <nav className="flex justify-between  ">
          <div className=" items-center ">
            <h1 className=" text-2xl text-white">Egzersiz Rehberi</h1>
          </div>
          <div className="hidden md:flex relative">
            <CiSearch
              className="absolute left-2 top-2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Egzersiz Ara"
              className=" border border-gray-300 rounded-lg px-8 py-1 bg-white w-80"
            />
          </div>
          <div className=" items-center space-x-6 text-lg hidden md:flex">
            <a href="#" className="text-white hover:text-gray-400 ">
              Anasayfa
            </a>
            <a href="#" className="text-white hover:text-gray-400 ">
              Egzersizler
            </a>
            <a href="/favorites" className="text-white hover:text-gray-400 ">
              Favoriler
            </a>
          </div>
        </nav>
        <button
          className="md:hidden absolute  right-4 top-4"
          onClick={toggleMenu}
        >
          <AiOutlineMenu className="text-red-500" size={30} />
        </button>
        {isOpen && (
          <div className="md:hidden">
            <Menu />
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className=" from-gray-900 via-gray-800 to-blue-900 bg-gradient-to-br">
        Footer burada olacak</footer>
    </div>
  );
}

export default Layout;
