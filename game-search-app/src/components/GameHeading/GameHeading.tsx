import { useGame } from '../../ManageState';
import './GameHeading.css';
const GameHeading = () => {
  const { state } = useGame();
  const Heading = `${state.platform?.name || ''} ${state.genre?.name || ''} Games`;
  return <h1 className="game-heading">{Heading}</h1>;
};
export default GameHeading;