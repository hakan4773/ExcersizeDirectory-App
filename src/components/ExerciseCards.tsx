import { useFavorite } from '../context/FavoriteContext'
import type { ExerciseType } from '../types/Excersize'

interface ExerciseCardsProps {
    exercise:ExerciseType
}

function ExerciseCards({exercise}:ExerciseCardsProps) {
  const  { isFavorite, toggleFavorite } = useFavorite()



  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4 flex  items-center'>
       <div className='w-full md:w-1/3'> 
        <img src={exercise.gifUrl} alt={exercise.name}
         className='w-full h-48 object-cover rounded-t-lg mb-4'>
        </img>
</div>
       <div className='flex-1'>
      <h2 className='text-xl font-bold'>{exercise.name}</h2>
        <p className='text-gray-600'>{exercise.bodyPart}</p>
        <p className='text-gray-600'>{exercise.target}</p>
        <p className='text-gray-600'>{exercise.equipment}</p>
</div>
  <button className='ml-4' onClick={() => toggleFavorite(exercise)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    <p>{isFavorite(exercise) ? "favorilere eklendi":"favorile"}</p>
  </button>
    </div>
  )
}

export default ExerciseCards
