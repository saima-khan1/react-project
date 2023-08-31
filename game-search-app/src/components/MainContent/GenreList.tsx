import useGenres from '../../hooks/useGenres';
import './GenreList.css'


const GenreList = () => {
  const {data} =useGenres();
  return (
    <div className="genres">
      <ul>{data.map((genre)=><li key={genre.id}>{genre.name}</li>)} </ul>
    </div>

  )
}

export default GenreList;