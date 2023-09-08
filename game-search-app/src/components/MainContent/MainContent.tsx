
import { useState } from "react"
import GamesSection from "./GamesSection"
import GenreList from "./GenreList"
import './MainContent.css'
import { Genre } from "../../hooks/useGenres"
import PlatformSelector from "../PlatformSelector/PlatformSelector"
import { Platform } from "../../hooks/useGames"
import NavBar from "../NavBar/NavBar"
import GameHeading from "../GameHeading/GameHeading"


export interface GameQuery{
  genre : Genre | null;
  platform : Platform | null;
  searchText:string;
}

const MainContent = () => {
//   const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
//  const [selectedPlatform , setSelectedPlatform] = useState<Platform | null>(null);

const [gameQuery , setGameQuery]= useState<GameQuery>({} as GameQuery)
  return (
    <>
    <div>
      <NavBar onSearch={(searchText)=>setGameQuery({ ...gameQuery, searchText })}/>
    </div>
    <div className='main-conent'>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery , genre})} />
        
       <div>
        <GameHeading gameQuery={gameQuery}/>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery ,platform})}/>
        <GamesSection gameQuery={gameQuery}/>
        </div>
       
        
    </div>
    </>
    
  )
}

export default MainContent