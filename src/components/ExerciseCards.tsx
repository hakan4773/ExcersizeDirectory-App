import { useFavorite } from '../context/FavoriteContext'
import type { ExerciseType } from '../types/Excersize'
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ExerciseCardsProps {
    exercise:ExerciseType
}

function ExerciseCards({exercise}:ExerciseCardsProps) {
  const  { isFavorite, toggleFavorite } = useFavorite()
  
  return (
      <div className="relative flex flex-col h-full bg-gray-900 backdrop-blur-md border-gray-500  rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
 
      <div className="w-full flex justify-center items-center">
        <img 
          src={exercise.gifUrl} 
          alt={exercise.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      
      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
        <p className=' text-gray-300'>Bölge: {exercise.bodyPart}</p>
          <p className=' text-gray-300'>Hedef: {exercise.target}</p>
          <p className=' text-gray-300'>Ekipman: {exercise.equipment}</p>
          <p className=' text-gray-300'>İkincil Kaslar: {exercise.secondaryMuscles.join(', ')}</p>
      </div>
      
      <div className="p-4 absolute">
        <button 
          onClick={() => toggleFavorite(exercise)}
          className="inset-0 left-0 flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors w-full justify-center"
        >
        
          <span className="text-sm">
            {isFavorite(exercise) ? <FaHeart className='transition-all duration-300 hover:-translate-y-1' size={30}/> : <FaRegHeart className='transition-all duration-300 hover:-translate-y-1' size={30}/>}
          </span>
        </button>

      </div>
    </div>

  )
}

export default ExerciseCards
