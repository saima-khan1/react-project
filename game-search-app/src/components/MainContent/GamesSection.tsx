import useGames from '../../hooks/useGames';
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css';
import { useGame } from '../../ManageState';
const GamesSection = () => {
  const { state } = useGame();
  const { data, error } = useGames(state);
  return (
    <>
      <div className="games-section">
        {error && <p>{error}</p>}
        <div className="game-cards">
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};
export default GamesSection;