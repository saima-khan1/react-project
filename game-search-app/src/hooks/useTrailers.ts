import ApiService from '../services/api-client';
import  Trailer from '../Entities/Trailer';

const useTrailers = async (gameId: number) => 
{
  try {
    const response = await ApiService.get<Trailer>(`/games/${gameId}/movies`);
    const data = response.data;
    
    return data;
  } catch (error) {
    throw error;
  }
};

export default useTrailers;
