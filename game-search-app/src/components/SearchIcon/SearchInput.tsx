import './SearchInput.css';
import searchIcon from '../../assets/Icons/searchIcon.svg';
import { useRef, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (inputRef.current) {
        onSearch(inputRef.current.value);
        inputRef.current.value = '';
        navigate('/');
      }
    },
    [onSearch, navigate]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },[]);

  const inputElement = useMemo(() => {
    console.log('searchInput rendering');
    return (
      <div className='search-box'>
        <img src={searchIcon} alt='' className='search-icon' />
        <input
          ref={inputRef}
          className='search-input'
          type='text'
          placeholder='Search games...'
        />
      </div>
    );
  }, []);

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <div className='search-container'>{inputElement}</div>
    </form>
  );
};

export default SearchInput;



