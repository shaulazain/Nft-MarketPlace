import wallet from "../../assets/howItWorks/wallet.png";
import collection from "../../assets/howItWorks/collection.png";
import earning from "../../assets/howItWorks/earning.png";
export default function HowItWorks(): JSX.Element {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px]  md:py-[80px] lg:px-[115px] lg:py-[40px]">
      <div className="flex flex-col gap-[48px] lg:gap-[60px] mx-auto max-w-[1050px] ">
        <div className="flex flex-col gap-[10px] ">
          <h3 className="text-[28px] lg:text-[38px] font-semibold  capitalize">
            How it Works
          </h3>
          <p className="text-[16px] lg:text-[22px]  capitalize ">
            Find out how to get started
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] ">
          {/* single card */}
          <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col  items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
            <img
              src={wallet}
              className=" size-[100px] md:size-[160px]  lg:size-[250px]  "
              alt=""
            />
            <div className="flex flex-col gap-[10px]  ">
              <h4 className=" font-semibold text-[16px] lg:text-[22px] ">
                Setup Your wallet
              </h4>
              <span className="text-[12px] lg:text-[16px] ">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </span>
            </div>
          </div>
          <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col  items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
            <img
              src={collection}
              className="size-[100px] md:size-[160px]  lg:size-[250px] "
              alt=""
            />
            <div className="flex flex-col gap-[10px]  ">
              <h4 className=" font-semibold text-[16px] lg:text-[22px] ">
                Create Collection
              </h4>
              <span className="text-[12px] lg:text-[16px] ">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </span>
            </div>
          </div>
          <div className="pt-[10px] md:px-[20px] md:pb-[30px] lg:px-[30px] md:w-[210px] lg:w-[330px] flex md:flex-col  items-center  gap-[20px] md:gap-[30px] bg-[#3B3B3B] p-[20px] rounded-[20px]">
            <img
              src={earning}
              className="size-[100px] md:size-[160px]  lg:size-[250px] "
              alt=""
            />
            <div className="flex flex-col gap-[10px]  ">
              <h4 className=" font-semibold text-[16px] lg:text-[22px] ">
                Start Earning
              </h4>
              <span className="text-[12px] lg:text-[16px] ">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
