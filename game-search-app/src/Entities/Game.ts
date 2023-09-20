import { Genre } from "./Genre";
import { Platform } from '../hooks/useGames';
import { Publisher } from "./Publishers";


export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers:Publisher[]
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
