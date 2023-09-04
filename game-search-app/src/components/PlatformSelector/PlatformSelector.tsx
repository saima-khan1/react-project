import { Platform } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import Dropdown from "./DropDown"
interface Props{
    onSelectPlatform:(platform : Platform ) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

const {data , error}  = usePlatforms();
if(error) return null;
  return (
    <>

    <Dropdown
      options={data.map((platform) => platform.name)}
      onClick={(option) => {
        const selectedPlatform = data.find((platform) => platform.name === option);
        if (selectedPlatform) {
          onSelectPlatform(selectedPlatform);
        }
      }}
    >
      {selectedPlatform?.name || 'Platforms'}
    </Dropdown>
    </>
  )
}

export default PlatformSelector;