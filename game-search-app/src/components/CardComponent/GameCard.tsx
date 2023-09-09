import { Game } from '../../hooks/useGames';
import getCroppedImageUrl from '../../services/image-urls';
import CriticScore from '../CriticScore/CriticScore';
import Emoji from '../Emoji/Emoji';
import PlatformIconList from '../PlatformIconList';
import Card from './Card';
import './GameCard.css';
import { Link } from 'react-router-dom';

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      imgSrc={getCroppedImageUrl(game.background_image)}
      heading={<Link to={'/games/' + game.slug}>{game.name}</Link>}
      emoji={<Emoji rating={game.rating_top} />}
    >
      <div className="platform-score">
        <div className="icons-platform">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
        <CriticScore score={game.metacritic} />
      </div>
    </Card>
  );
};

export default GameCard;