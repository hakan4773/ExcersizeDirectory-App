import type { ExerciseType } from '../types/Excersize'
interface ExerciseCardsProps {
    exercise:ExerciseType
}
function ExerciseCards({exercise}:ExerciseCardsProps) {
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
  
    </div>
  )
}

export default ExerciseCards
