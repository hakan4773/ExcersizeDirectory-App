import React from "react";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Layout({ children,setSearchTerm}: LayoutProps) {
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
      <SearchInput setSearchTerm={setSearchTerm}/>
          </div>
          <div className=" items-center space-x-6 text-lg hidden md:flex">
            <Link to="/" className="text-white hover:text-gray-400 ">
              Anasayfa
            </Link>
            <Link to="exercise" className="text-white hover:text-gray-400 ">
              Egzersizler
            </Link>
            <Link to="/favorites" className="text-white hover:text-gray-400 ">
              Favoriler
            </Link>
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
            <Menu setSearchTerm={setSearchTerm} />
          </div>
        )}
      </header>
      <main>{children}</main>
<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white text-center py-4 mt-auto">
  <p>© 2025 Egzersiz Rehberi - Tüm hakları saklıdır.</p>
</footer>

    </div>
  );
}

export default Layout;
