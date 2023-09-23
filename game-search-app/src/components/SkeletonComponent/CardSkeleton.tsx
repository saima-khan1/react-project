
import './CardSkeleton.css';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="card-skeleton-image"></div>
      <div className="card-skeleton-content">
        <div className="card-skeleton-title"></div>
        <div className="card-skeleton-description"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
