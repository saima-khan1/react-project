import useGenres, { Genre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/image-urls';
import './GenreList.css'

interface Props{
  onSelectGenre: (genre: Genre)=> void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const {data} =useGenres();
  return (
    <div className="genres">
      <ul>{data.map((genre)=><li key={genre.id}>
        <div className='genre-list'>
          <img src={getCroppedImageUrl(genre.image_background)}  />
          <button onClick={()=>onSelectGenre(genre)}  type='button'>{genre.name}</button>
        </div>
        </li>)} 
        </ul>
    </div>

  )
}

export default GenreList;