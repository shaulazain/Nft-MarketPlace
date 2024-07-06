import React from 'react';
import useFetchArtistName from '../../hooks/useFetchArtistName';
import { ArtistNameProps } from '../../types/types';

export const ArtistName: React.FC<ArtistNameProps> = ({ creator }) => {
  const artistName = useFetchArtistName(creator);

  return <span className="text-[16px] lg:text-[22px]">{artistName}</span>;
};
