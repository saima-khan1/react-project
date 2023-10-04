import ClearFiltersButton from '../components/ClearFilterComponent/ClearFilterButton';
import GameHeading from '../components/GameHeading/GameHeading';
import GamesSection from '../components/MainContent/GamesSection';
import GenreList from '../components/MainContent/GenreList';
import PlatformSelector from '../components/PlatformSelector/PlatformSelector';
import '../index.css';

function HomePage() {
  return (
    <div className="main-conent">
      <GenreList />
      <div>
        <GameHeading />
        <div className='filters'>
          <PlatformSelector />
          <ClearFiltersButton/>
        </div>
        <GamesSection />
      </div>
    </div>
  );
}

export default HomePage;