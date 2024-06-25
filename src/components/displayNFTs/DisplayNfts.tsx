import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NftType } from "../../types/nfts/commonTypes";
import { Link } from "react-router-dom";
import { useState } from "react";
import loading from "../../assets/loading.gif"
export default function DisplayNFTs({
  nfts,
}: {
  nfts: NftType[] | null;
}): JSX.Element {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageLoad = (key: number) => {
    setLoadedImages((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  return (
    <div className="bg-[#3B3B3B] px-[30px] py-[40px] md:px-[77px] md:py-[60px] lg:px-[115px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:max-w-[1050px] md:max-w-[680px] mx-auto">
        {/* one nft */}
        {nfts?.map((item, key) => (
          <Link
            to={`/nft/${item.contract}/${item.identifier}`}
            key={key}
            className="flex flex-col  items-center justify-center  h-fit"
          >
            {/* nft image */}

            {!loadedImages[key] && (
              <div className="h-[238px] w-full min-w-[295px] max-w-[315px] md:max-w-[330px] md:h-[238px] bg-black rounded-t-[20px] flex items-center justify-center">
                <img src={loading} alt="" />
                
              </div>
            )}
            <LazyLoadImage
              className={`h-[238px] w-full min-w-[295px] max-w-[315px] md:max-w-[330px]  md:h-fit  rounded-t-[20px] ${
                loadedImages[key] ? "" : "hidden"
              }`}
              src={item.image_url}
              alt=""
              effect="blur"
              onLoad={() => handleImageLoad(key)}
            />

            <div className=" h-fit w-full min-w-[295px] max-w-[315px] md:max-w-[330px] bg-[#2B2B2B] rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]">
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-[22px] font-semibold">{item.name}</h5>

                  <div className="flex gap-[10px]">
                    <span>@</span>
                    <span className="text-[16px]"> Artist </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[#858584] text-[12px]">Price</span>
                    <span className="text-[12px] md:text-[16px]">1.64 ETH</span>
                  </div>
                  <div className="flex flex-col gap-[8px] text-right">
                    <span className="text-[#858584] text-[12px]">
                      Higest Bid
                    </span>
                    <span className="text-[12px] md:text-[16px]">0.33 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
