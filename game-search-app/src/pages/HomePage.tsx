import GameHeading from '../components/GameHeading/GameHeading';
import GamesSection from '../components/MainContent/GamesSection';
import GenreList from '../components/MainContent/GenreList';
import PlatformSelector from '../components/PlatformSelector/PlatformSelector';

function HomePage() {
  return (
    <div className="main-conent">
      <GenreList />
      <div>
        <GameHeading />
        <PlatformSelector />
        <GamesSection />
      </div>
    </div>
  );
}

export default HomePage;