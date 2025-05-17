import axios from 'axios';

export async function fetchData(){
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '20',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY || '',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  return response.data;
} catch (error) {
  console.error(error);
}
}