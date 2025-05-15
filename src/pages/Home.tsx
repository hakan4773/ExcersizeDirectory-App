import ExerciseCards from '../components/ExerciseCards';
import { useExercises } from '../hooks/useExercises';

function Home({searchTerm}: { searchTerm: string }) {
    const {data,error,isPending}=useExercises();

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;
    const filteredExercises=data?.filter((exercise)=>exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      {filteredExercises.map((exercise,index)=>(
        <div key={index}>
            <ExerciseCards key={exercise.id} exercise={exercise} />
             </div>
      ))}
    </div>
  )
}

export default Home
