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
    <div>
    
    </div>
  )
}

export default Home
