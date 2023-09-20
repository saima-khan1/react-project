// import { useEffect, useState } from "react";
// import useScreenshots from "../hooks/useScreenshots";
// import { Screenshot } from "../Entities/Screenshot";

// interface Props{
//     gameId: number;
// }

// const GameScreenshots = ({gameId}:Props) => {
//     const [data, setData] = useState<Array<Screenshot>>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await useScreenshots(gameId);
//         const results = response[0]?.results || [];
//         setData([results]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
    

//     fetchData();
//   }, [gameId]);

//   console.log('mapped data', data);
//   return (
//     <div>
//     {data.map((screenshot) => (
//       <img
//       src={screenshot.image}
//       key={screenshot.id}
//       alt='Screenshot'
//       onError={(e) => console.error("Image failed to load:", e)}
//     />
//     ))}
//   </div>
//   );
// }

// export default GameScreenshots