
import { useGame } from '../../ManageState';
import './ClearFilterButton.css';
import closeIcon from '../../assets/Icons/closeicon.svg';
const ClearFiltersButton = () => {
  const { state, dispatch } = useGame();

  //const ClearFilter = state.platform || state.genre ? 'Clear Filters' : ``;

  const handleClearFilters = () => {
    // Dispatch actions to clear selected filters
    dispatch({ type: 'SET_GENRE', genre: null });
    dispatch({ type: 'SET_PLATFORM', platform: null });
    dispatch({ type: 'SET_SEARCH_TEXT', searchText: '' });
  };

  return (
    <div className='clear-filter'>
        {state.platform || state.genre || state.searchText ? <button onClick={handleClearFilters} className="clear-filter-button">
    Clear filter {<img id='close-icon' src={closeIcon} alt='close-icon' className='close-icon'/>}
  </button> : ''}
    </div>
    
  );
};

export default ClearFiltersButton;
