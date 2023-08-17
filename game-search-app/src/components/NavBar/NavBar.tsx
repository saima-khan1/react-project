import logo from '../../assets/logo.webp';
import  './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="navbar_logo" src={logo} alt="logo" />
        <h1>Navbar</h1>
    </div>
  )
}

export default NavBar