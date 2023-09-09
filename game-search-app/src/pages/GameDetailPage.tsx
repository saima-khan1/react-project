import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import { Game } from '../hooks/useGames';

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
    <>
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
    </>
  );
};

export default GameDetailPage;