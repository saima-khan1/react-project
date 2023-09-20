import useGames from '../../hooks/useGames';
import GameCard from '../CardComponent/GameCard';
import './GamesSection.css';
import { useGame } from '../../ManageState';
import CardSkeleton from '../SkeletonComponent/CardSkeleton';
const GamesSection = () => {
  const { state } = useGame();
  const { data, error, isLoading } = useGames(state);
  const skeletons=[1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="games-section">
        {error && <p>{error}</p>}
        <div className="game-cards">
          {isLoading && skeletons.map(skeleton => <CardSkeleton  key={skeleton}/>)}
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};
export default GamesSection;