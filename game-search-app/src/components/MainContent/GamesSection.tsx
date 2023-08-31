import useGames from '../../hooks/useGames'
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css'

const GamesSection = () => {
  const {data , error} = useGames();
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