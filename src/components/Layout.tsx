import React from 'react'
import { CiSearch } from "react-icons/ci";
import Menu from './Menu';
import { AiOutlineMenu } from "react-icons/ai";
function Layout({children}: {children: React.ReactNode}) {
const [isOpen, setIsOpen] = React.useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (  
    <div className='flex flex-col h-screen '>
        <header className=' bg-cyan-300    py-6 px-2'>
           
            <nav className='flex justify-between  '>
                <div className=' items-center hidden md:flex'> 
                <h1 className=' text-2xl'>Egzersiz Rehberi</h1>
                </div>
                <div className='hidden md:flex relative' > 
                <CiSearch className='absolute left-2 top-2 text-gray-500' size={20} />
                    <input type="text" placeholder='Egzersiz Ara' 
                    className=' border border-gray-300 rounded-lg px-8 py-1 bg-white w-80' />
                </div>
                <div className=' items-center space-x-6 text-lg hidden md:flex'>
                <a href="#" className='text-blue-600 hover:text-white'>Anasayfa</a>
                <a href="#" className='text-blue-600 hover:text-white' >Egzersizler</a>
                <a href="/favorites" className="text-blue-600 hover:text-white">Favoriler</a>
                    </div>
                <button className='md:hidden absolute  right-4 top-4' onClick={toggleMenu}>
                <AiOutlineMenu className='text-red-500' size={30} />
             </button>
            {isOpen && (
  <div className="md:hidden">
    <Menu />
  </div>
)}

                </nav>
            
        </header>
      <main>
       {children} İçerik burada olacak
      </main>
        <footer>
            Footer burada olacak
        </footer>
    </div>
  )
}

export default Layout
