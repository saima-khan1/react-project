import './SearchInput.css';
import searchIcon from '../../assets/Icons/searchIcon.svg'

const SearchInput = () => {
    return (
        <div className='search-container'>
            <div className='search-box'>
               <img src={searchIcon} alt='' className='search-icon'/>
                <input className='search-input' type='text' placeholder='Search games...' />
            </div>
        </div>
    );
}

export default SearchInput;
