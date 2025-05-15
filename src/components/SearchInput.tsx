import React from 'react'
import { CiSearch } from 'react-icons/ci';
interface SearchInputProps {
    searchTerm:string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
function SearchInput({searchTerm, setSearchTerm }: SearchInputProps) {
  return (
      <form>
            <CiSearch className="absolute left-2 top-2 text-gray-500" size={20} />
            <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Egzersiz Ara"
            className=" border border-gray-300 rounded-lg px-8 py-1 bg-white lg:w-80 w-52"
            />
        </form>
  )
}

export default SearchInput
