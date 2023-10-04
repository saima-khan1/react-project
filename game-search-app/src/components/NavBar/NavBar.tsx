import { useEffect, useState } from 'react';
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColoModeSwitch';
import './NavBar.css';
import SearchInput from '../SearchIcon/SearchInput';
import { useGame } from '../../ManageState';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const { dispatch } = useGame();
  const storedMode = localStorage.getItem('mode');
  const [darkMode, setDarkMode] = useState(storedMode === 'dark');
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  const handleSearch = (searchText: string) => {
    dispatch({ type: 'SET_SEARCH_TEXT', searchText });
  };
  return (
    <div className="navbar"><Link to='http://localhost:5173/'>
      <img className="navbar_logo" src={logo} alt="logo" /></Link>
      <SearchInput onSearch={handleSearch} />
      <ColorModeSwitch darkMode={darkMode} toggleMode={toggleMode} />
    </div>
  );
};
export default NavBar;