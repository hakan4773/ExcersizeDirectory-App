import axios from 'axios';

export async function fetchData(){
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '10',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': '8402dad98emsh3657b687a9caab4p178290jsnbed4c99273c0',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}