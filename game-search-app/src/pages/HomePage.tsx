import { Link } from "react-router-dom";
import '../index.css';
import video from '../assets/videos/video_game1.mp4';
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className="home-page">
      <h1 className="home-heading">Game Search App 
      </h1>
      <div className="home-container">
        <div className="welcome-details">
          
          <p className="text">🎮 Ready to dive into the world of gaming? You're in the right place! Game Search App, your gateway to the world of gaming! Dive into a vast library of games, explore genres, and discover new adventures. Whether you're on a quest to find your next gaming obsession or simply looking to relive old classics, our app is your ultimate companion. Unleash the power of search, filters, and detailed game pages to make informed choices. Join us in your gaming journey, where every click opens the door to endless fun and excitement. Start exploring now!</p>
          <button className="button-style"> 
            <Link to="/games">Discover more</Link></button>
        </div>
        <div className="video-container">
          <video autoPlay muted loop id="game-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Footer/>
    </div> 
    </>
    
  )
}

export default HomePage;
