import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorite } from "../context/FavoriteContext";
import type { ExerciseType } from "../types/Excersize";


function Favorites() {
   const { favorites,removeFavorite,isFavorite} = useFavorite()

  if(favorites.length===0){
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-500">Favori egzersiz yok</h1>
      </div>
    )

  }

  return (
   <div className="p-4 bg-slate-100" >
      <h1 className="text-2xl font-bold mb-4">Favori Egzersizler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4">
        {favorites.map((exercise:ExerciseType) => (
        <div className="relative flex flex-col h-full bg-gray-900 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
             {/* egzersiz resimleri */}
            <div className="w-full flex justify-center items-center">
              <img 
                src={exercise.gifUrl} 
                alt={exercise.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
             {/* egzersiz bilgileri */}
            
            <div className="p-4 flex-1">
              <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
              <p className=' text-gray-300'>Bölge: {exercise.bodyPart}</p>
                <p className=' text-gray-300'>Hedef: {exercise.target}</p>
                <p className=' text-gray-300'>Ekipman: {exercise.equipment}</p>
                <p className=' text-gray-300'>İkincil Kaslar: {exercise.secondaryMuscles.join(', ')}</p>
            </div>
            {/* favoriden çıkarma */}
            <div className="p-4 absolute">
              <button 
                onClick={() => removeFavorite(exercise)}
                className="inset-0 left-0 flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors w-full justify-center"
              >
              
                <span className="text-sm">
                  {isFavorite(exercise) ? <FaHeart className='transition-all duration-300 hover:-translate-y-1' size={30}/> : <FaRegHeart className='transition-all duration-300 hover:-translate-y-1' size={30}/>}
                </span>
              </button>
      
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
