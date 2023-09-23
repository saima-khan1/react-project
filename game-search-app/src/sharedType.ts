import { Platform } from './hooks/useGames';
import Genre from "./Entities/Genre";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}