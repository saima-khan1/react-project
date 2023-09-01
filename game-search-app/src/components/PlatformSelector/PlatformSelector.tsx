import usePlatforms from "../../hooks/usePlatforms";
import Dropdown from "./DropDown"


const PlatformSelector = () => {
    //const options = ['Option 1', 'Option 2', 'Option 3'];
 // const [selectedOption, setSelectedOption] = useState<string | null>(null);

//   const handleSelect = (option: string) => {
//     setSelectedOption(option);

const {data , error}  = usePlatforms();
if(error) return null;
const options = data.map((Platform)=> Platform.name );
console.log('platform', options)
  return (
   <Dropdown options={options}/>
  )
}

export default PlatformSelector