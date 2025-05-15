import SearchInput from "./SearchInput";
interface SearchInputProps {
    searchTerm:string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Menu({searchTerm, setSearchTerm}: SearchInputProps) {
    
  return (
        <div className=" w-[90vw] flex  flex-col items-center justify-center px-4">
            <div className="  flex flex-col  justify-center items-center text-center  space-y-4">
        <div className=" relative   mt-4" >
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <div className=" items-center text-lg flex flex-col ">
            <a href="#" className="text-white hover:text-gray-400 w-full">
            Anasayfa
            </a>
            <a href="#" className="text-white hover:text-gray-400  w-full">
            Egzersizler
            </a>
            <a href="/favorites" className="text-white hover:text-gray-400  w-full">
            Favoriler
            </a>
        </div>
        </div></div>
  );
}

export default Menu;
