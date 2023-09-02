
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
   
 
const useGames = (selectedGenre: Genre | null , selectedPlatform: Platform | null )=> {
 
  let queryParams: Record<string, string | number> | undefined;
  if (selectedGenre && selectedPlatform) {
    queryParams = { genres: selectedGenre.id, platforms: selectedPlatform.id };
    console.log('selectedGenre && selectedPlatform', queryParams);
  } else if (selectedGenre) {
    queryParams = { genres: selectedGenre.id };
    console.log('selectedGenre', queryParams);
  } else if (selectedPlatform) {
    queryParams = { platforms: selectedPlatform.id };
    console.log('selectedPlatform', queryParams);
  }
  return useData<Game>('/games', undefined, undefined, queryParams, [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;