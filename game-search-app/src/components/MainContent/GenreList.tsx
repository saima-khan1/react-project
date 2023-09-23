import useGenres from '../../hooks/useGenres';
import  Genre  from "../../Entities/Genre";
import getCroppedImageUrl from '../../services/image-urls';
import './GenreList.css';
import { useGame } from '../../ManageState';
import GenreListSkeleton from '../SkeletonComponent/GenresListSkeleton';
const GenreList = () => {
  const { state, dispatch } = useGame();
  const { data, isLoading } = useGenres();
  const handleGenreSelect = (genre: Genre) => {
    // Dispatch an action to update the selected genre in the game state
    dispatch({ type: 'SET_GENRE', genre });
  };
  return (
    <>
      <div className="genres">
        <h2>Genres</h2>
        {isLoading ? (
        <GenreListSkeleton itemCount={5} />
      ): 
        <ul>
          {data.map((genre) => (
            <li key={genre.id}>
              <div className="genre-list">
                <img src={getCroppedImageUrl(genre.image_background)} />
                <button 
                  style={{
                    fontWeight:
                      genre.id === state.genre?.id ? 'bold' : 'normal',
                      
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
}
      </div>
    </>
  );
};
export default GenreList;