import './SearchInput.css';
import searchIcon from '../../assets/Icons/searchIcon.svg'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Props{
     onSearch: (searchText: string )=>void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    return (
      
        <>
         <form className='search-bar' onSubmit={(event)=>{
            event.preventDefault();
            if(ref.current) {
                onSearch(ref.current.value);
            navigate('/')

            } 
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

