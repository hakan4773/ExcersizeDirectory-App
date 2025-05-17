import { useQuery } from "@tanstack/react-query";
import type { ExerciseType } from "../types/Excersize";
import { fetchData } from "../services/api";

export const useExercises = () => {
  return  useQuery<ExerciseType[]> ({
  queryKey: ['exercises'],
  queryFn: fetchData,
  refetchOnWindowFocus: false,
  retry: false,
  staleTime: 1000 * 60 * 5
})};