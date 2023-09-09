import { useGame } from '../../ManageState';
const GameHeading = () => {
  const { state } = useGame();
  const Heading = `${state.platform?.name || ''} ${state.genre?.name || ''}`;
  return <h1 className="game-heading">{Heading}</h1>;
};
export default GameHeading;