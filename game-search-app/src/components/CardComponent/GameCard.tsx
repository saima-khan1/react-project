import { Game } from "../../hooks/useGames"
import CriticScore from "../CriticScore/CriticScore"
import PlatformIconList from "../PlatformIconList"
import Card from "./Card"
import './GameCard.css'

interface Props {
    game : Game

}

const GameCard = ({ game }:Props) => {
  return (
  <Card imgSrc={game.background_image} heading={game.name}>
    <div className="platform-score">
      <div className="icons-platform">
        <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)} /> 
      </div>
      <CriticScore score={game.metacritic}/>
    </div>
    
  </Card>

  )
}

export default GameCard

