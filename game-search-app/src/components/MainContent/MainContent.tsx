
import { useState } from "react"
import GamesSection from "./GamesSection"
import GenreList from "./GenreList"
import './MainContent.css'
import { Genre } from "../../hooks/useGenres"

const MainContent = () => {
  const [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className='main-conent'>
        <GenreList onSelectGenre={(genre)=> setSelectedGenre(genre)} />
        <GamesSection  selectedGenre={selectedGenre}/>
    </div>
  )
}

export default MainContent