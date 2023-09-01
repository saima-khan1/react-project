
import { useState } from "react"
import GamesSection from "./GamesSection"
import GenreList from "./GenreList"
import './MainContent.css'
import { Genre } from "../../hooks/useGenres"
import PlatformSelector from "../PlatformSelector/PlatformSelector"

const MainContent = () => {
  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className='main-conent'>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)} />
       <div><PlatformSelector/>
        <GamesSection  selectedGenre={selectedGenre}/></div>
       
        
    </div>
  )
}

export default MainContent