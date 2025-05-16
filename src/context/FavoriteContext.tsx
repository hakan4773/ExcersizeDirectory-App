import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ExerciseType } from "../types/Excersize";

type FavoriteContextType = {
  favorites: ExerciseType[];
  isFavorite: (exercise: ExerciseType) => boolean;
  toggleFavorite: (exercise: ExerciseType) => void;
  removeFavorite: (exercise: ExerciseType) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);
export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
const [favorites, setFavorites] = useState<ExerciseType[]>([]);

  useEffect(()=>{
  const storedFavorites = localStorage.getItem("favorites");
  if (storedFavorites) {
    setFavorites(JSON.parse(storedFavorites));
  }
},[])

//favori stateini güncelleme
const updateFavoriteList=(updatedFavorites:ExerciseType[])=>{
localStorage.setItem("favorites",JSON.stringify(updatedFavorites))
setFavorites(updatedFavorites);
}


//favorilerde var mı
const isFavorite=(exercise:ExerciseType)=>{
  return favorites.some((fav)=>fav.id===exercise.id)
}
//favorilere ekleme/çıkarma
const toggleFavorite=(exercise:ExerciseType)=>{
const exists=isFavorite(exercise);

const updated=exists ? favorites.filter((fav)=>fav.id!==exercise.id) :[...favorites,exercise]
updateFavoriteList(updated)
}
//favorilerden kaldırma
const removeFavorite=(exercise:ExerciseType)=>{
const updated=favorites.filter((fav)=>fav.id!==exercise.id) 
updateFavoriteList(updated)

}

 return (
    <FavoriteContext.Provider
       value={{ favorites, isFavorite, toggleFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
} 
export const useFavorite=()=>{
const context =useContext(FavoriteContext)
 if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
}