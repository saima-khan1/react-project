import { useEffect, useState } from "react";
import ApiService from "../services/api-client";

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
    metacritic:number;
  }
   
  interface FetchGamesResponse{
    count : number;
    results : Game[];
  }
const useGames = ()=> {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect (()=> {
        const controller = new AbortController();
        ApiService.get<FetchGamesResponse>("/games", { signal: controller.signal })
        .then((res)=> {

            setGames(res.data.results)
        }).catch((error) => {
            if(error.name === 'AbortError') return;
            setError(error.message)
        });
        return () => controller.abort();
    },[]);
    return {games, error};

}

export default useGames;