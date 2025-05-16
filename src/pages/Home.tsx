import { Link } from 'react-router-dom';
import ExerciseCards from '../components/ExerciseCards';
import { useExercises } from '../hooks/useExercises';

function Home({searchTerm}: { searchTerm: string }) {
    const {data,error,isPending}=useExercises();

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;
   //İsme göre filtreleme
const filteredExercises=data?.filter((exercise)=>exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='p-4'>
      <div className="text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fitness Yolculuğunuza Hoş Geldiniz
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Profesyonel rehberlik ile hedeflerinize ulaşın
          </p>

        <div className=' w-full p-4'>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Fitness"
          className="rounded-xl shadow-2xl max-w-4xl mx-auto w-full"
        />
    </div>
</div>
      <h1 className="text-2xl font-bold mb-4">Egzersizler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredExercises.slice(0,3).map((exercise) => (
          <ExerciseCards key={exercise.id} exercise={exercise} />
        ))}
      </div>

 <div className='flex items-center justify-center mt-4 bg-gradient-to-r from-blue-500 to-indigo-600
  rounded-2xl p-4 text-white max-w-sm mx-auto hover:scale-90 transition duration-300'> 
  <Link to={"/exercise"} className='px-2 '>Daha fazla egzersiz  için </Link>

 </div>


</div>

  )
}

export default Home
