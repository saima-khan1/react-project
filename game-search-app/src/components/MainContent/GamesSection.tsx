import useGames from '../../hooks/useGames'
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css'

const GamesSection = () => {
  const {games, error} = useGames();
  return (
    <>
      <div className='games-section'>
        {error && <p>{error}</p>}
          <div className='game-cards'>
            {games.map((game) => (
              <GameCard key={game.id} game={game}/>
            ))}
          </div>
      </div>
    </>
    
  )
}

export default GamesSection