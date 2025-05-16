import { useExercises } from '../hooks/useExercises';
import ExerciseCards from '../components/ExerciseCards';

function Exercise({searchTerm}: { searchTerm: string }) {
     const {data,error,isPending}=useExercises();

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;

    const filteredExercises=data?.filter((exercise)=>exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4">
  {filteredExercises.map((exercise)=>(
    
            <ExerciseCards key={exercise.id} exercise={exercise} />
      ))}  
             </div>
  )
}

export default Exercise
