import { ReactComponent as EyeIcon } from "../../assets/images/icons/eye.svg";
import avatar from '../../assets/images/avatar.png'
import Timer1 from "../timer/timer";

export default function NftHighlight(): JSX.Element {
  return (
    <div className="relative h-[590px] md:h-[630px] lg:h-[640px] bg-cover bg-center bg-no-repeat bg-nft-mobile md:bg-nft-desktop">
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent">
        <div className="py-[120px] px-[30px] md:py-[360px] md:px-[90px]  lg:px-[115px]">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-[30px]  ">
              <button className="h-[44px] w-[151px] flex justify-center items-center gap-[12px] bg-[#3B3B3B] rounded-[20px]">
                <span><img src={avatar} className="rounded-full h-[24px] w-[24px]" alt="" /></span>
                <span> Shroomie</span>
              </button>
              <h3 className="text-[38px] font-semibold">Magic Mashroom</h3>
              <div className="block md:hidden">
                <Timer1 isPlaceBid={false} />
              </div>
              <button className="bg-white w-full md:w-[198px] h-[60px] rounded-[20px] flex items-center justify-center mt-0 md:-mt-6">
               <div className="flex items-center justify-center gap-[12px]">
                      <EyeIcon />
               <span className="text-[#2B2B2B]">See NFT</span>
                 </div>
              </button>
            </div>
            <div className=" hidden md:block content-end ">
              <Timer1 isPlaceBid={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
