
import { useState } from "react"
import GamesSection from "./GamesSection"
import GenreList from "./GenreList"
import './MainContent.css'
import { Genre } from "../../hooks/useGenres"
import PlatformSelector from "../PlatformSelector/PlatformSelector"
import { Platform } from "../../hooks/useGames"

const MainContent = () => {
  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
 const [selectedPlatform , setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <div className='main-conent'>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)} />
       <div><PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GamesSection selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/></div>
       
        
    </div>
  )
}

export default MainContent