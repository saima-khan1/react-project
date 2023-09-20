import { useState, useEffect } from "react";
import useTrailers from "../hooks/useTrailers";
import '../index.css'


interface Props{
  gameId:number;
}
// export const GameTrailer = ({gameId}:Props) => {
//  const {data}= useTrailers(gameId);
 
// return console.log('testing', data);
  
// }

export const GameTrailer = ({ gameId }: Props) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await useTrailers(gameId);
        setData(result);
        console.log('testing', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [gameId]);
  
 const first=data?.results[0];
 return first?(

 <video className="game-video" src={first.data[480]}
  poster={first.preview} controls
  ></video>):<div className="game-video-null"> No video Available</div>

  
};

export default GameTrailer;

