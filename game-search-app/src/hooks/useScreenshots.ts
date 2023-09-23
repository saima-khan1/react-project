import ApiService from '../services/api-client';
import Screenshot from '../Entities/Screenshot';

const useScreenshots = async (gameId: number) => 
{
  try {
    const response = await ApiService.get<Screenshot>(`/games/${gameId}/screenshots`);
    const data = response.data;
    console.log('screeshot useScreenshots', data);
    
    
    return data;
  } catch (error) {
    throw error; // You can handle the error here or let it propagate up
  }
};

export default useScreenshots;
