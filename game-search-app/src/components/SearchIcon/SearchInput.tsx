// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './SearchInput.css'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


// const SearchInput = () => {
//   return (
//     <>
//     <FontAwesomeIcon icon={faSearch}/>
//     <input className='search-input'  type='text' placeholder='search games...' ></input>
//     </>
    
//   )
// }

// export default SearchInput
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchInput.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
    return (
        <div className='search-container'>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input className='search-input' type='text' placeholder='Search games...' />
            </div>
        </div>
    );
}

export default SearchInput;
