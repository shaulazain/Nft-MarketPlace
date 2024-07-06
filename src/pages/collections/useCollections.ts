import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import {
  fetchNftsByCollection,
  clearNfts,
} from '../../store/slices/NftsByCollectionSllice';

export function useCollections() {
  const { collectionSlug } = useParams();
  const [loadingNfts, setLoadingNfts] = useState(true);
  const nfts = useAppSelector((state) => state.NftsByCollectionReducer.nfts?.nfts) || null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(clearNfts());
    setLoadingNfts(true);

    if (collectionSlug) {
      dispatch(fetchNftsByCollection({ collection_slug: collectionSlug, limit: 9 }))
        .then(() => {
          setLoadingNfts(false);
        })
        .catch((error) => {
          console.error('Error fetching NFTs:', error);
          setLoadingNfts(false);
        });
    }
  }, [collectionSlug, dispatch]);

  return {
    loadingNfts,
    nfts,
  };
}
