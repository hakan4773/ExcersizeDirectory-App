import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
import { AiOutlineMenu } from "react-icons/ai"
import Menu from "./Menu"
import React, { useState } from "react"
interface HeaderProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    toggleMenu: () => void
    isOpen: boolean
}
function Header({setSearchTerm,toggleMenu,isOpen}:HeaderProps) {
const [isPage, setIsPage] = useState<string>("home")

const handlePageChange = (page: string) => {
    setIsPage(page)
  }
  return (
    <header className="  from-gray-900 via-gray-800 to-blue-900 bg-gradient-to-br   py-6 px-2">
        <nav className="flex justify-between  ">
          <div className=" items-center ">
            <Link to={"/"} className=" text-2xl text-white">Egzersiz Rehberi</Link>
          </div>
          <div className="hidden md:flex relative">
      <SearchInput setSearchTerm={setSearchTerm}/>
          </div>
          <div className=" items-center space-x-6 text-lg hidden md:flex">
            
            <Link to="/" onClick={()=>handlePageChange("home")}  className={isPage==="home" ? "  text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
              Anasayfa
            </Link>
            <Link to="exercise" onClick={()=>handlePageChange("exercise")} className={isPage==="exercise" ? "  text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
              Egzersizler
            </Link>
            <Link to="/favorites" onClick={()=>handlePageChange("favorites")} className={isPage==="favorites" ? " text-blue-600 hover:text-gray-400 ":"text-white hover:text-gray-400"}>
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
  )
}

export default Header
