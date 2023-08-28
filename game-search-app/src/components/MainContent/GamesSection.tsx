import useGames from '../../hooks/useGames'
import './GamesSection.css'

const GamesSection = () => {
  const {games, error} = useGames();
  return (
    <>
      <div className='games-section'>
      {error && <p>{error}</p>}
      <ul>
      {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
    </>
    
  )
}

export default GamesSection