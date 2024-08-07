import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { CollectionType } from "../../types/types";
import { Link } from "react-router-dom";
import { fetchCollections } from "../../store/slices/NftCollectionsSlice";
import  nft1 from '../../assets/images/nft1.png'
import numbernft from '../../assets/images/Number of additional NFTs.png'
export default function TrendingCollection(): JSX.Element {
  const collections = useAppSelector(
    (state) => state.collectionsReducer.collections?.collections
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);
  //{process.env.REACT_APP_OPEN_SEA_KEY}
  return (
    <div className="px-[30px] py-[40px] md:px-[72px] md:py-[80px] lg:px-[115px] lg:py-[40px] ">
      <div className=" max-w-[1050px]  mx-auto flex flex-col gap-[40px] lg:gap-[60px] ">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[28px] lg:text-[38px] font-semibold">
            Trending Collecticon
          </h3>
          <p className="text-[16px] lg:text-[22px] ">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        {/* cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mx-auto justify-center ">
          {/* single card */}
          {collections?.map((item: CollectionType, index: number) => (
            <Link
              to={`${item.collection}`}
              key={index}
              className={`md:max-w-[330px] max-w-[315px] flex-col gap-[15px] lg:flex`}
            >
              <img
                alt="NFTS"
                src={item?.image_url}
                className=" w-full  size-[315px] md:size-[330px] rounded-[20px]"
              />
             <div className="flex gap-y-4 gap-2">
              <div>
               <img src={nft1} alt="nft1" className="w-[100px] h-[100px] rounded-[20px]" />
              </div>
              <div>
               <img src={nft1} alt="nft1" className="w-[100px] h-[100px] rounded-[20px]" />
              </div>
              <div>
                <img src={numbernft} alt="nft1" className="w-[100px] h-[100px]"/>
              </div>
             </div>
            

             

              <div className="flex flex-col gap-[10px] mt-2">
                <h5 className=" size-[22px] font-semibold w-full">
                  {item?.collection}
                </h5>
                <div className="flex gap-[12px]">
                  <p>@</p>
                  <p className="text-[16px] ">{item?.name.slice(0, 18)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
