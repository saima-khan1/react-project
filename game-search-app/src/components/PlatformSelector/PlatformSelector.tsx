import usePlatforms from '../../hooks/usePlatforms';
import { useGame } from '../../ManageState';
import Dropdown from './Dropdown';
const PlatformSelector = () => {
  const { state, dispatch } = useGame();
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <Dropdown
        options={data.map((platform) => platform.name)}
        onClick={(option) => {
          const selectedPlatform = data.find(
            (platform) => platform.name === option
          );
          if (selectedPlatform) {
            dispatch({ type: 'SET_PLATFORM', platform: selectedPlatform });
          }
        }}
      >
        {state.platform?.name || 'Platforms'}
      </Dropdown>
    </>
  );
};
export default PlatformSelector;