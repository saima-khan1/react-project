
import CategoryList from "./CategoryList"
import GamesSection from "./GamesSection"
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='main-conent'>
        <CategoryList/>
        <GamesSection/>
    </div>
  )
}

export default MainContent