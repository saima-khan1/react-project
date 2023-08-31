
import GamesSection from "./GamesSection"
import GenreList from "./GenreList"
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='main-conent'>
        <GenreList/>
        <GamesSection/>
    </div>
  )
}

export default MainContent