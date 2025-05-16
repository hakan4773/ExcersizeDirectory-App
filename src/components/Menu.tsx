import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
interface SearchInputProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Menu({setSearchTerm}: SearchInputProps) {
    
  return (
        <div className=" w-[90vw] flex  flex-col items-center justify-center px-4">
            <div className="  flex flex-col  justify-center items-center text-center  space-y-4">
        <div className=" relative   mt-4" >
                <SearchInput  setSearchTerm={setSearchTerm}/>
        </div>
        <div className=" items-center text-lg flex flex-col ">
            <Link to={"/"} className="text-white hover:text-gray-400 w-full">
            Anasayfa
            </Link>
            <Link to={"exercise"} className="text-white hover:text-gray-400  w-full">
            Egzersizler
            </Link>
            <Link to={"/favorites"} className="text-white hover:text-gray-400  w-full">
            Favoriler
            </Link>
        </div>
        </div></div>
  );
}

export default Menu;
