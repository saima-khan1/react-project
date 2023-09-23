import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import Game  from '../Entities/Game';
import ExpandableText from '../components/ExpandableText/ExpandableText';

import GameAttributes from '../components/GameAttributes';
import { GameTrailer } from '../components/GameTrailer';
import LoadingSpinner from '../components/SkeletonComponent/LoadingSpinner';
import GameScreenshots from '../components/GameScreenshots';
import '../index.css';

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
            
    return <LoadingSpinner/>;
  }

  return (
    <div className='gamedetail-grid'>
      <div className='gamedetail-right-col'>
        <h1 className='gamedetail-heading'>{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}/>
      </div>
      <div className='gamedetail-left-col'>
        <GameTrailer gameId={game.id}/>
        <GameScreenshots gameId={game.id}/>
      </div>
    </div>
  );
};

export default GameDetailPage;