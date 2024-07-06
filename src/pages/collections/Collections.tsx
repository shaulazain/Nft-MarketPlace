import React from 'react';
import { useCollections } from './useCollections';
import DisplayNFTs from '../../components/displayNFTs/DisplayNfts';
import Loader from '../../components/loader/Loader';

export default function Collections(): JSX.Element {
  const { loadingNfts, nfts } = useCollections();

  return (
    <>
      <div className="px-[30px] pt-[40px] md:px-[90px] md:pt-[60px] lg:px-[115px] lg:pt-[80px] pb-[14px]">
        <div className="flex flex-col gap-[30px] mx-auto max-w-[1050px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-semibold text-[28px] md:text-[38px] lg:text-[51px]">
              Collection Name
            </h2>
            <p className="text-[16px] lg:text-[22px]">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          {/* search bar */}
          <div className="relative h-[60px] border border-[#3B3B3B] rounded-[20px] w-full px-[20px]">
            <input
              type="search"
              id="search-dropdown"
              className="block h-full p-2.5 w-full z-20 text-[16px] bg-transparent focus:outline-none"
              placeholder="Search your favourite NFTs"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white"
            >
              <search />
            </button>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="flex items-center justify-center gap-4">
              <h5>NFTs</h5>
              <span className="rounded-[20px] bg-[#858584] px-[10px] py-[5px]">
                302
              </span>
            </div>
          </div>
        </div>
      </div>
      {loadingNfts ? (
        <Loader />
      ) : (
        <DisplayNFTs nfts={nfts} />
      )}
      <hr className="border border-[#2B2B2B]" />
    </>
  );
}
