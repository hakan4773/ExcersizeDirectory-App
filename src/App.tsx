import './index.css'
import type { ExerciseType } from './types/Excersize';
import { useExercises } from './hooks/useExercises';

function App() {
const {data,error,isPending}=useExercises();

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;
  return (
    <div className="p-4">
      {data && (
      <ul className="mt-4 space-y-2">
        {data.map((item: ExerciseType, index: number) => (
          <li key={index} className="bg-blue-100 p-2 rounded">
            {item.name} 
            <span className="text-gray-500">({item.bodyPart})</span>
            <span className="text-gray-500">({item.target})</span>
            <span className="text-gray-500">({item.equipment})</span>
            <span className="text-gray-500">
              <img src={item.gifUrl} alt="" />
              </span>
          </li>
        ))}
      </ul>
    )}
    </div>
  
  )
}

export default App
