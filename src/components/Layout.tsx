import React from "react";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";
import SearchInput from "./SearchInput";

interface LayoutProps {
  children: React.ReactNode;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Layout({ children,searchTerm,setSearchTerm}: LayoutProps) {
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
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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
            <Menu setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
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
