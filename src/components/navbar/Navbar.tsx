import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Menu } from "../../assets/icons/burgerMenu.svg";
import { Link } from "react-router-dom";
function Navbar(): JSX.Element {
  return (
    <div className="flex justify-between items-center  text-white py-[15px] px-[30px] md:px-[50px] md:py-[15px] lg:py-[20px]">
      <Link to="/" className="flex items-center">
        <Logo className="h-[20px] lg:h-[30px] size-[32px] w-8 mr-2" />
        <h2 className="text-[14.85px] lg:text-[19.8px] font-bold">
          NFT marketplace
        </h2>
      </Link>

      <div className="hidden lg:block">
        <ul className=" flex space-x-[36px] ml-auto items-center font-medium">
          <li className="hover:text-gray-400 cursor-pointer">Marketplace</li>
          <li className="hover:text-gray-400 cursor-pointer">Rankings</li>
          <li className="hover:text-gray-400 cursor-pointer">
            Connect a wallet
          </li>
          <button className="bg-[#A259FF] rounded-2xl py-3 px-7 flex items-center gap-2">
            {" "}
            <User />
            Sign Up
          </button>
        </ul>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
