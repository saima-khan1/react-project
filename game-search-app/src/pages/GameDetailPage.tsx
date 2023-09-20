import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import { Game } from '../Entities/Game';
import ExpandableText from '../components/ExpandableText/ExpandableText';

import GameAttributes from '../components/GameAttributes';
import { GameTrailer } from '../components/GameTrailer';
// import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchGame() {
      try {
        const { data, error } = await useGameDetail(slug!);
        if (error) {
          throw error;
        }
        setGame(await data);
      } catch (catchedError) {
        setError(catchedError as Error);
      }
    }

    fetchGame();
  }, [slug]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className='game-detail-page'>
      <div className='game-detail-row1'>
        <h1>{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </div>
      <div className='game-detail-row2'>
          <div className='col1-game-attribute'>
            <GameAttributes game={game}/>
          </div>
          <div className='col2-game-trailer'>
            <GameTrailer gameId={game.id}/>
          </div>
      </div>
    </div>
  );
};

export default GameDetailPage;