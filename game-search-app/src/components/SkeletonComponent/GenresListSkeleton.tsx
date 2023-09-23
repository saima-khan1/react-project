import React from 'react';
import './GenresListSkeleton.css';

type GenreListSkeletonProps = {
  itemCount: number;
};

const GenreListSkeleton: React.FC<GenreListSkeletonProps> = ({ itemCount }) => {
  const skeletons = [];

  for (let i = 0; i < itemCount; i++) {
    skeletons.push(
      <li key={i} className="genre-list-skeleton">
        <div className="genre-list">
          <div className="genre-list-image"></div>
          <button className="genre-list-button-skeleton"></button>
        </div>
      </li>
    );
  }

  return <ul>{skeletons}</ul>;
};

export default GenreListSkeleton;

