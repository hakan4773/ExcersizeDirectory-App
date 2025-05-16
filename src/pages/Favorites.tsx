import { useFavorite } from "../context/FavoriteContext";
import type { ExerciseType } from "../types/Excersize";


function Favorites() {
   const { favorites,removeFavorite} = useFavorite()

  return (
   <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favori Egzersizler</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {favorites.map((exercise:ExerciseType) => (
          <div key={exercise.id} className="bg-white p-4 rounded shadow">
            <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{exercise.name}</h2>
            <p className="text-gray-600">{exercise.bodyPart} • {exercise.target}</p>
            <p className="text-gray-500">{exercise.equipment}</p>
             <button className='ml-4' onClick={()=>removeFavorite(exercise)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
