import { Game } from "../../hooks/useGames"
import PlatformIconList from "../PlatformIconList"
import Card from "./Card"

interface Props {
    game : Game

}

const GameCard = ({ game }:Props) => {
  return (
  <Card imgSrc={game.background_image} heading={game.name}>
    <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)} />
    
  </Card>

  )
}

export default GameCard

