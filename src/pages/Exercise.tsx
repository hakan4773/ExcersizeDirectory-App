import { useExercises } from '../hooks/useExercises';
import ExerciseCards from '../components/ExerciseCards';
import { useState } from 'react';
import FilterSelect from '../components/FilterSelect';

function Exercise({searchTerm}: { searchTerm: string }) {
     const {data,error,isPending}=useExercises();
     const [selectedTarget, setSelectedTarget] = useState('all');

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;

const filteredExercises = data.filter((exercise) => {
  const nameSearch = searchTerm.trim() === "" || exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
  const targetSearch =
    selectedTarget.toLowerCase() === "all" ||
    exercise.target.toLowerCase() === selectedTarget.toLowerCase();

  return nameSearch && targetSearch;
});


  return (
  <>
    {/* Select ile kas grubuna göre filtreleme */}
    <FilterSelect selectedTarget={selectedTarget} setSelectedTarget={setSelectedTarget} data={data}/>
     {/* Egzersiz filtreleme */}

 {filteredExercises.length === 0 ? (
  <div className="flex items-center justify-center">
    <h1 className="text-2xl font-bold text-gray-500">
        {searchTerm.trim() === "" && selectedTarget === "all"
            ? "Egzersiz bulunamadı"
            : "Filtreleme sonucu bulunamadı"}
    </h1>
        </div>        
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {filteredExercises.map((exercise) => (
            <ExerciseCards key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
             </>
  )
}

export default Exercise
