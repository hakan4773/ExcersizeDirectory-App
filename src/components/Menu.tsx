import { CiSearch } from "react-icons/ci";

function Menu() {
  return (
        <div className="  bg-cyan-300 flex  flex-col items-center justify-center pt-10 px-4">
            <div className="  flex flex-col  justify-center items-center text-center ">
            <h1 className=" text-2xl">Egzersiz Rehberi</h1>
        <div className=" relative   mt-4" >
            <CiSearch className="absolute left-2 top-2 text-gray-500" size={20} />
            <input
            type="text"
            placeholder="Egzersiz Ara"
            className=" border border-gray-300 rounded-lg px-8 py-1 bg-white w-52"
            />
        </div>
        <div className=" items-center text-lg flex flex-col ">
            <a href="#" className="text-blue-600 hover:text-white w-full">
            Anasayfa
            </a>
            <a href="#" className="text-blue-600 hover:text-white w-full">
            Egzersizler
            </a>
            <a href="/favorites" className="text-blue-600 hover:text-white w-full">
            Favoriler
            </a>
        </div>
        </div></div>
  );
}

export default Menu;
