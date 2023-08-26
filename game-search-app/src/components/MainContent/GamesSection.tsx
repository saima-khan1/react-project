import apiClient from '../../services/api-client'
import './GamesSection.css'

interface Game{
  id : number;
  name : string
}
 
interface FetchGamesResponse{
  count : number;
  results : Game[];
}


const GamesSection = () => {
  apiClient.get<FetchGamesResponse>('/games')
  .then((res)=> console.log(res.data.results));

  return (
    <div className='games-section'>GamesSection</div>
  )
}

export default GamesSection