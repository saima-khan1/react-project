import './SearchInput.css';
import searchIcon from '../../assets/Icons/searchIcon.svg'
import { useRef } from 'react';

export interface Props{
     onSearch: (searchText: string )=>void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
      
        <>
         <form className='search-bar' onSubmit={(event)=>{
            event.preventDefault();
            if(ref.current) return  onSearch(ref.current.value);
        }}>
        <div className='search-container'>
            <div className='search-box'>
               <img src={searchIcon} alt='' className='search-icon'/>
                <input ref = {ref} className='search-input' type='text' placeholder='Search games...' />
            </div>
        </div>
        </form>
        </>
    );
}

export default SearchInput;
// function useRef<T>(arg0: string) {
//     throw new Error('Function not implemented.');
// }

