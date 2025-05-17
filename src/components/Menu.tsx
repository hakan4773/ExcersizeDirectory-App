import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
interface SearchInputProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function Menu({ setSearchTerm }: SearchInputProps) {
 const location = useLocation();
  const currentPath = location.pathname;
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
            className={
              currentPath === "/"
                ? "  text-blue-600 hover:text-gray-400 "
                : "text-white hover:text-gray-400"
            }
          >
            Anasayfa
          </Link>
          <Link
            to="exercise"
            className={
              currentPath === "/exercise"
                ? "  text-blue-600 hover:text-gray-400 "
                : "text-white hover:text-gray-400"
            }

          >
            Egzersizler
          </Link>
          <Link
            to="/favorites"
            className={
              currentPath === "/favorites"
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
