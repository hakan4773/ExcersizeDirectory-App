import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useState } from "react";
interface SearchInputProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Menu({ setSearchTerm }: SearchInputProps) {
  const [isPage, setIsPage] = useState<string>("home");

  const handlePageChange = (page: string) => {
    setIsPage(page);
  };
  return (
    <div className=" w-[90vw] flex  flex-col items-center justify-center px-4">
      <div className="  flex flex-col  justify-center items-center text-center  space-y-4">
        <div className=" relative   mt-4">
          <SearchInput setSearchTerm={setSearchTerm} />
        </div>
        {/* Linkler mobil görünüm */}
        <div className=" items-center text-lg flex flex-col ">
          <Link
            to="/"
            onClick={() => handlePageChange("home")}
            className={
              isPage === "home"
                ? "  text-blue-600 hover:text-gray-400 "
                : "text-white hover:text-gray-400"
            }
          >
            Anasayfa
          </Link>
          <Link
            to="exercise"
            onClick={() => handlePageChange("exercise")}
            className={
              isPage === "exercise"
                ? "  text-blue-600 hover:text-gray-400 "
                : "text-white hover:text-gray-400"
            }
          >
            Egzersizler
          </Link>
          <Link
            to="/favorites"
            onClick={() => handlePageChange("favorites")}
            className={
              isPage === "favorites"
                ? " text-blue-600 hover:text-gray-400 "
                : "text-white hover:text-gray-400"
            }
          >
            Favoriler
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
