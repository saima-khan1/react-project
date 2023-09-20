import { Game } from "../Entities/Game";
import CriticScore from "./CriticScore/CriticScore";
import DefinationItem from "./DefinationItem/DefinationItem";
import '../index.css'

interface Props{
    game:Game;
}

const GameAttributes = ({game}:Props) => {
  return (
    <dl className="game-attribute">

    <DefinationItem term='Platforms'>{game.parent_platforms?.map(({platform})=><p key={platform.id}>{platform.name}</p>)}</DefinationItem>
    <DefinationItem term='Genre'>{game.genres.map((genre)=><p key={genre.id}>{genre.name}</p>)}</DefinationItem>
    <DefinationItem term='Metascore'><CriticScore score={game.metacritic}/></DefinationItem>
    {/* <DefinationItem term='Metascore'>
    <span style={{ padding: '2  apx' }}>
      <CriticScore score={game.metacritic} />
    </span>
  </DefinationItem> */}
    <DefinationItem term='Publishers'>{game.publishers?.map(publisher => <p key={publisher.id}>{publisher.name}</p>)}</DefinationItem>
    </dl>
  )
}

export default GameAttributes