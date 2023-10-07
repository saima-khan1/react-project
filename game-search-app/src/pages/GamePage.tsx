// import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ClearFiltersButton from '../components/ClearFilterComponent/ClearFilterButton';
import GameHeading from '../components/GameHeading/GameHeading';
import GamesSection from '../components/MainContent/GamesSection';
import GenreList from '../components/MainContent/GenreList';
import PlatformSelector from '../components/PlatformSelector/PlatformSelector';
import '../index.css';
import '../components/BreadCrumb/BreadCrumb.css';

function GamePage() {
  // const BreadcrumbItems = [
  //   {label: 'Home', link: '/'},
  //   {label: 'Games'},
  // ];
  return (
    <>
      
      <div className="main-conent">
      <GenreList />
      <div>
        <GameHeading />
        {/* <div className='Gamepage-Breadcrumb'>
      <BreadCrumb items={BreadcrumbItems}/>
      </div> */}
        
        <div className='filters'>
          <PlatformSelector />
          <ClearFiltersButton/>
        </div>
        <GamesSection />
      </div>
    </div>
    </>
    
  );
}

export default GamePage;