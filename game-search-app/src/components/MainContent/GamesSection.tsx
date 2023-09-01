import useGames from '../../hooks/useGames'
import { Genre } from '../../hooks/useGenres';
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css'

interface Props{
  selectedGenre: Genre | null;
}

const GamesSection = ({selectedGenre}:Props) => {
  const {data , error} = useGames(selectedGenre);
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