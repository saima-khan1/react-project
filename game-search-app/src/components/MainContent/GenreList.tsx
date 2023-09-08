import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-urls';
import './GenreList.css'

interface Props{
  onSelectGenre: (genre: Genre)=> void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre }: Props) => {
  const {data} =useGenres();
  return (
    <>
    
    <div className="genres">
    <h2>Genres</h2>
      <ul>{data.map((genre)=><li key={genre.id}>
        <div className='genre-list'>
          <img src={getCroppedImageUrl(genre.image_background)}  />
          <button style={{ fontWeight: genre.id === selectedGenre?.id ? 'bold' : 'normal' }} onClick={()=>onSelectGenre(genre)}  type='button'>{genre.name}</button>
        </div>
        </li>)} 
        </ul>
    </div>
    </>
  )
}

export default GenreList;