import artImg from "../../assets/categoriesData/images/art.png";
import collectiblesImg from "../../assets/categoriesData/images/collectibles.png";
import musicImg from "../../assets/categoriesData/images/music.png";
import photographyImg from "../../assets/categoriesData/images/photography.png";
import sportImg from "../../assets/categoriesData/images/sport.png";
import utilityImg from "../../assets/categoriesData/images/utility.png";
import videoImg from "../../assets/categoriesData/images/video.png";
import virtualWorldsImg from "../../assets/categoriesData/images/virtualWorlds.png";
import { ReactComponent as ArtIcon } from "../../assets/categoriesData/icons/art.svg";
import { ReactComponent as CollectionIcon } from "../../assets/categoriesData/icons/collection.svg";
import { ReactComponent as UtilityIcon } from "../../assets/categoriesData/icons/utility.svg";
import { ReactComponent as PhotographyIcon } from "../../assets/categoriesData/icons/photography.svg";
import { ReactComponent as SportIcon } from "../../assets/categoriesData/icons/sport.svg";
import { ReactComponent as VirtualWordsIcon } from "../../assets/categoriesData/icons/virtualWords.svg";
import { ReactComponent as VideoIcon } from "../../assets/categoriesData/icons/video.svg";
import { ReactComponent as MusicIcon } from "../../assets/categoriesData/icons/music.svg";
import { CategoryItem } from "../../types/commonTypes";

export default function BrowseCategories(): JSX.Element {
  const categoryItems: CategoryItem[] = [
    {
      category: "Art",
      imgUrl: artImg,
      link: "<Link to Art category>",
      icon: ArtIcon,
    },
    {
      category: "Collectibles",
      imgUrl: collectiblesImg,
      link: "<Link to Collectibles category>",
      icon: CollectionIcon,
    },
    {
      category: "Music",
      imgUrl: musicImg,
      link: "<Link to Music category>",
      icon: MusicIcon,
    },
    {
      category: "Photography",
      imgUrl: photographyImg,
      link: "<Link to Photography category>",
      icon: PhotographyIcon,
    },
    {
      category: "Video",
      imgUrl: videoImg,
      link: "<Link to Video category>",
      icon: VideoIcon,
    },
    {
      category: "Utility",
      imgUrl: utilityImg,
      link: "<Link to Utility category>",
      icon: UtilityIcon,
    },
    {
      category: "Sport",
      imgUrl: sportImg,
      link: "<Link to Sport category>",
      icon: SportIcon,
    },
    {
      category: "Virtual Worlds",
      imgUrl: virtualWorldsImg,
      link: "<Link to Virtual Worlds category>",
      icon: VirtualWordsIcon,
    },
  ];

  return (
    <div className="px-[30px] py-[40px] md:px-[72px] lg:px-[115px] lg:py-[80px]">
      <div className="flex flex-col gap-[40px] lg:gap-[60px] max-w-[1050px] mx-auto ">
        {/* title */}
        <div>
          <h3 className="font-semibold text-[28px] lg:text-[38px]">
            Browse Categories
          </h3>
        </div>

        {/* categories list */}
        <div className="grid gap-[20px] md:gap-[30px] justify-center grid-cols-2 md:grid-cols-4 mx-auto">
          {categoryItems.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[147.5px] h-[209px] md:max-w-[150px] lg:max-w-[240px]  lg:h-[316px] rounded-t-[20px]"
            >
              <div className="relative max-h-[142px] lg:max-h-[240px] h-full w-full rounded-t-[20px] overflow-hidden">
                <div
                  className="absolute inset-0 z-10 bg-cover bg-center rounded-t-[20px]"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <div className="absolute inset-0 backdrop-blur-sm rounded-t-[20px]"></div>
                </div>
                <img
                  src={item.imgUrl}
                  alt={item.category}
                  className="relative z-0 h-full w-full object-cover rounded-t-[20px]"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 rounded-t-[20px]">
                  <item.icon className="size-[80px] lg:size-[100px]" />
                </div>
              </div>
              <div className="h-[67px] w-full md:h-[76px] bg-[#3B3B3B] rounded-b-[20px] ">
                <p className="w-full font-semibold sm:text-[16px] text-sm lg:text-[22px] py-[20px] px-2 xsm:px-[10px] md:px-[20px]  lg:pb-[30px] ">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
