import ApiService from '../services/api-client';
import { Trailer } from '../Entities/Trailer';

const useTrailers = async (gameId: number) => 
// {
//     const response = await ApiService.get<Trailer>(`/games/${gameId}/movies`);
//     const data = response.data
//     console.log('response', data);
    
//     return (data);
//   };
{
  try {
    const response = await ApiService.get<Trailer>(`/games/${gameId}/movies`);
    const data = response.data;
    console.log('response', data);
    
    return data;
  } catch (error) {
    throw error; // You can handle the error here or let it propagate up
  }
};

export default useTrailers;
