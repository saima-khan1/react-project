
import { GameQuery } from "../components/MainContent/MainContent";
import useData from "./useData";

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
    rating_top:number
  }
   
 
const useGames =  (gameQuery : GameQuery)=> {
 
  let queryParams: Record<string, string | number> | undefined;
  if (gameQuery.genre && gameQuery.platform) {
    queryParams = { genres: gameQuery.genre.id, platforms: gameQuery.platform.id, search: gameQuery.searchText };
    console.log('selectedGenre && selectedPlatform', queryParams);
  } else if (gameQuery.genre) {
    queryParams = { genres: gameQuery.genre.id };
    console.log('selectedGenre', queryParams);
  } else if (gameQuery.platform) {
    queryParams = { platforms: gameQuery.platform.id };
    console.log('selectedPlatform', queryParams);
  } else if (gameQuery.searchText) {
    queryParams= {search: gameQuery.searchText}
    console.log('search text', queryParams);
  }
  return useData<Game>('/games', undefined, undefined, queryParams, [gameQuery]);
}

export default useGames;