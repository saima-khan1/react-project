import { useEffect, useState } from 'react';
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColoModeSwitch';
import  './NavBar.css'
import SearchInput from '../SearchIcon/SearchInput';
interface Props{
  onSearch: (searchText: string )=> void;
}

const NavBar = ({onSearch}: Props) => {
  const storedMode = localStorage.getItem('mode');
  const [darkMode , setDarkMode]=useState(storedMode === 'dark');
  useEffect(()=>{
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('mode' , darkMode ? 'dark' : 'light')
  } , [darkMode]) ;
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="navbar">
        <img className="navbar_logo" src={logo} alt="logo" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch  darkMode={darkMode} toggleMode={toggleMode}/>
        
    </div>
  )
}

export default NavBar

