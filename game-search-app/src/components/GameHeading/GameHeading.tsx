import { GameQuery } from "../MainContent/MainContent"

interface Props{
    gameQuery:GameQuery;
}
const GameHeading = ({gameQuery}:Props) => {
    const Heading=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}`
  return (

  <h1 className="game-heading">{Heading}</h1>
  )
}

export default GameHeading