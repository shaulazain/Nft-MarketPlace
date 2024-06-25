import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as EnvelopIcon } from "../../assets/icons/envelope.svg";

export default function Footer(): JSX.Element {
  return (
    <div className="px-[30px] py-[40px] md:px-[72px]  lg:px-[115px]  bg-[#3B3B3B]">
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1050px] gap-[30px] lg:justify-between">
        <div className="flex flex-col gap-[20px] lg:max-w-[327.41px]">
          <div className="flex items-center">
            <Logo className="size-[32px] mr-2" />
            <h2 className="text-[14.85px] lg:text-[19.8px] font-bold">
              NFT marketplace
            </h2>
          </div>

          <span className="text-[16px] text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </span>
          <div className="flex flex-col gap-[15px]">
            <span className="text-[16px] text-[#CCCCCC]">
              Join our community
            </span>
            <div className="flex gap-[10px]">
              <Discord />
              <Youtube />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] text-[#CCCCCC] lg:w-[240px]">
          <h4 className="font-bold text-[22px] text-white ">Explore</h4>
          <span >Marketplace</span>
          <span>Rankings</span>
          <span >Connect a wallet</span>
        </div>

        <div className="flex flex-col gap-[20px] text-[#CCCCCC]">
          <h4 className="font-bold text-[22px] text-white ">
            Join our weekly digest
          </h4>
          <span>
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-0 justify-between md:bg-white rounded-[20px] md:max-w-[420px]">
            <input
              className=" text-[#2B2B2B] h-[46px] rounded-[20px] py-[16px] px-[20px] border border-[#858584] md:border-none  md:focus:outline-none "
              type="text"
              placeholder="Enter Your Email Address"
            />

            <button className="flex gap-[12px] items-center justify-center h-[46px] rounded-[20px]  bg-[#A259FF] md:w-[211px] ">
              <EnvelopIcon />
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      <hr className="w-full border border-[#858584] mt-[30px] " />
      <p className="pt-[20px] text-[#CCCCCC] text-[12px]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  );
}
