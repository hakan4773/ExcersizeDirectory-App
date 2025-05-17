import { Link, useLocation } from "react-router-dom"
import SearchInput from "./SearchInput"
import { AiOutlineMenu } from "react-icons/ai"
import Menu from "./Menu"
import React from "react"
interface HeaderProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    toggleMenu: () => void
    isOpen: boolean
}
function Header({setSearchTerm,toggleMenu,isOpen}:HeaderProps) {
 const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="  from-gray-900 via-gray-800 to-blue-900 bg-gradient-to-br   py-6 px-2">
        <nav className="flex justify-between  ">
          <div className=" items-center ">
            <Link to={"/"} className=" text-2xl text-white">Egzersiz Rehberi</Link>
          </div>
          <div className="hidden md:flex relative">
      <SearchInput setSearchTerm={setSearchTerm}/>
          </div>
          {/* Linkler masaüstü görünüm */}
          <div className=" items-center space-x-6 text-lg hidden md:flex">
            
            <Link to="/"   className={currentPath==="/" ? "  text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
              Anasayfa
            </Link>
            <Link to="exercise" className={currentPath==="/exercise" ? "  text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
              Egzersizler
            </Link>
            <Link to="/favorites"  className={currentPath==="/favorites" ? " text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
              Favoriler
            </Link>
          </div>
        </nav>
        {/* hamburger menu */}
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
  )
}

export default Header
