import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch/ColoModeSwitch';
import  './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="navbar_logo" src={logo} alt="logo" />
        <h1>Navbar</h1>
        <ColorModeSwitch initialColorMode='dark'/>
    </div>
  )
}

export default NavBar