import { useMemo, useCallback } from 'react';
import useGenres from '../../hooks/useGenres';
import Genre from "../../Entities/Genre";
import getCroppedImageUrl from '../../services/image-urls';
import './GenreList.css';
import { useGame } from '../../ManageState';
import GenreListSkeleton from '../SkeletonComponent/GenresListSkeleton';

const GenreList = () => {
  const { state, dispatch } = useGame();
  const { data, isLoading } = useGenres();

  // Create memoized callback for handleGenreSelect
  const handleGenreSelect = useCallback(
    (genre: Genre) => {
      // Dispatch an action to update the selected genre in the game state 
      dispatch({ type: 'SET_GENRE', genre });
    },
    [dispatch]
  );

  // Create memoized JSX for the genre list
  const genreList = useMemo(() => {
    console.log('Rendering genre list');
    return (
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>
            <div className="genre-list">
              <img src={getCroppedImageUrl(genre.image_background)} alt={genre.name} />
              <button
                style={{
                  fontWeight: genre.id === state.genre?.id ? 'bold' : 'normal',
                }}
                onClick={() => handleGenreSelect(genre)}
                type="button"
              >
                {genre.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }, [data, state.genre, handleGenreSelect]);

  return (
    <div className="genres">
      <h2>Genres</h2>
      {isLoading ? (
        <GenreListSkeleton itemCount={5} />
      ) : (
        genreList
      )}
    </div>
  );
};

export default GenreList;

