
import useData from "./useData";
import { Genre } from "./useGenres";

 export interface Platform {
    id: number;
    name: string;
    slug: string;
}

 export interface Game {
    id : number;
    name : string;
    background_image:string;
    parent_platforms: {platform: Platform}[];
    metacritic:number
  }
   
 
const useGames = (selectedGenre: Genre | null )=> {
  const queryParams = selectedGenre ? { genres: selectedGenre.id } : undefined;

  return useData<Game>('/games', undefined, undefined, queryParams, [selectedGenre?.id]);
}

export default useGames;