import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import { ReactComponent as User } from "../../assets/images/icons/user.svg";
import { ReactComponent as Menu } from "../../assets/images/icons/burgerMenu.svg";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center text-white py-[15px] px-[30px] md:px-[50px] md:py-[15px] lg:py-[20px] bg-[#2B2B2B]">
        <Link to="/" className="flex items-center">
          <Logo className="h-[20px] lg:h-[30px] size-[32px] w-8 mr-2" />
          <h2 className="text-[16.85px] lg:text-[19.8px] font-bold">
            NFT marketplace
          </h2>
        </Link>

        <div className="hidden lg:block">
          <ul className="flex space-x-[36px] ml-auto items-center font-medium">
            <li className="hover:text-gray-400 cursor-pointer">Marketplace</li>
            <li className="hover:text-gray-400 cursor-pointer">Rankings</li>
            <li className="hover:text-gray-400 cursor-pointer">Connect a wallet</li>
            <button className="bg-[#A259FF] rounded-2xl py-3 px-7 flex items-center gap-2">
              <User />
              Sign Up
            </button>
          </ul>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleSidebar} />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 right-0 w-64 bg-[#1a1a1a] text-white h-full shadow-lg z-20">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-400">Close</button>
            <ul className="flex flex-col space-y-12 p-4">
              <li className="hover:text-gray-400 cursor-pointer">Marketplace</li>
              <li className="hover:text-gray-400 cursor-pointer">Rankings</li>
              <li className="hover:text-gray-400 cursor-pointer">Connect a wallet</li>
              <button className="bg-[#A259FF] rounded-2xl py-3 px-7 flex items-center gap-2">
                <User />
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
