import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}