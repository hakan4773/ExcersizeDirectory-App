import './index.css'
import type { ExerciseType } from './types/Excersize';
import { useExercises } from './hooks/useExercises';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
const {data,error,isPending}=useExercises();

if (isPending) return <p>Loading...</p>;
if (error) return <p>Error fetching data.</p>;
if (!data) return <p>No data found.</p>;
  return (
    <Layout> 
      <Home />
    </Layout>  
  )
}

export default App
