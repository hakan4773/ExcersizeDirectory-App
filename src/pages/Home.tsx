import { Link } from 'react-router-dom';
import ExerciseCards from '../components/ExerciseCards';
import { useExercises } from '../hooks/useExercises';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CiDumbbell } from "react-icons/ci";
import ClipLoader from "react-spinners/ClipLoader";
  function Home({searchTerm}: { searchTerm: string }) {
    const {data,error,isLoading }=useExercises();

if (isLoading) return (
 <div className="flex justify-center items-center h-32">
    <ClipLoader color="#36d7b7" size={50} />
  </div>
  )
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;
   //İsme göre filtreleme
const filteredExercises=data?.filter((exercise)=>exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
  <div className="p-4 bg-slate-100">
  
      <div className="flex-col lg:flex-row text-center mb-10 from-gray-900 via-gray-800 to-blue-900 bg-gradient-to-l  flex rounded-2xl p-8 text-white">
      <div className='flex flex-col  items-center justify-center'>
        <CiDumbbell size={40}/> 
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn drop-shadow-md">
         Egzersiz Yolculuğunuza Hoş Geldiniz
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
          Profesyonel rehberlik ile hedeflerinize ulaşın
        </p>
         <Link to={"/exercise"} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-all duration-300">
          Hemen Başla
        </Link> </div>
        <div className="w-full p-4">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="egzersiz"
            loading="lazy"
            className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto object-cover h-64 md:h-96"
          />
        </div>
      </div>

      {/* Egzersiz Kartları */}
      <h1 className="text-2xl font-bold mb-4 text-center">Popüler Egzersizler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredExercises.slice(0, 3).map((exercise) => (
          <ExerciseCards key={exercise.id} exercise={exercise} />
        ))}
      </div>

      {/* Daha Fazla Egzersiz Butonu */}
      <div className="flex items-center justify-center mt-6">
        <Link
          to="/exercise"
          className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white w-full sm:w-auto max-w-sm mx-auto hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <span className="px-2">Daha fazla egzersiz için</span>
          <AiOutlineArrowRight size={20} />
        </Link>
      </div>
    </div>

  )
}

export default Home
