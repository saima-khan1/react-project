import ApiService from '../services/api-client';
import { Game } from '../Entities/Game';

const useGameDetail = (slug: string) => {
  const getGameDetail = async () => {
    const response = await ApiService.getById<Game>('/games', slug);
    return response.data;
  };
  return {
    data: getGameDetail(),
    error: null,
  };
};

export default useGameDetail;