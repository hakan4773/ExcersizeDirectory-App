import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SearchInputProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchInput({setSearchTerm }: SearchInputProps) {
     const formik=useFormik({
        initialValues:{
            searchTerm:''
        },
        validationSchema:Yup.object({
        searchTerm:Yup.string().required("Arama terimi boş olamaz")
        }),
        onSubmit:(values)=>{
            setSearchTerm(values.searchTerm)
        }
     })
 
  return (
      <form onSubmit={formik.handleSubmit}>
            <CiSearch className="absolute left-2 top-2 text-gray-500" size={20} />
            <input
            value={formik.values.searchTerm}
       onChange={(e) => {
       formik.handleChange(e);
       setSearchTerm(e.target.value); 
        }}
            name="searchTerm"
            type="text"
            placeholder="Egzersiz Ara"
            className=" border border-gray-300 rounded-lg px-8 py-1 bg-white lg:w-80 w-52"
            />
              {formik.submitCount > 0 && formik.errors.searchTerm && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.searchTerm}</div>
      )}
        </form>
  )
}

export default SearchInput
