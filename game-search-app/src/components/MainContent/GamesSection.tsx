import useGames from '../../hooks/useGames'

import GameCard from '../CardComponent/GameCard';
import './GamesSection.css'
import { GameQuery } from './MainContent';

interface Props{
  gameQuery:GameQuery ;
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
 }

const GamesSection = ({gameQuery}:Props) => {
  const {data , error} = useGames(gameQuery);
  return (
    <>
      <div className='games-section'>
        {error && <p>{error}</p>}
          <div className='game-cards'>
            {data.map((game) => (
              <GameCard key={game.id} game={game}/>
            ))}
          </div>
      </div>
    </>
    
  )
}

export default GamesSection