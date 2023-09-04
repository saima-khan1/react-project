import useGames from '../../hooks/useGames'
import { Genre } from '../../hooks/useGenres';
import { Platform } from '../../hooks/usePlatforms';
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css'

interface Props{
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GamesSection = ({selectedGenre, selectedPlatform}:Props) => {
  const {data , error} = useGames(selectedGenre ,selectedPlatform);
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