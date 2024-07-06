import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clearNfts, fetchNft } from '../../store/slices/NftSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export function useNFTPage() {
  const { contract, identifier } = useParams();
  const nft = useAppSelector((state) => state.NftReducer.nft?.nft) || null;
  const loading = useAppSelector((state) => state.NftReducer.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(clearNfts());
    if (contract && identifier) {
      dispatch(fetchNft({ contract: contract, identifier: identifier }));
    }
  }, [dispatch, contract, identifier]);

  return { nft, loading };
}
