import { ReactComponent as ArtIcon } from "../../assets/categoriesData/icons/art.svg";
import { ReactComponent as CollectionIcon } from "../../assets/categoriesData/icons/collection.svg";
import { ReactComponent as UtilityIcon } from "../../assets/categoriesData/icons/utility.svg";
import { ReactComponent as PhotographyIcon } from "../../assets/categoriesData/icons/photography.svg";
import { ReactComponent as SportIcon } from "../../assets/categoriesData/icons/sport.svg";
import { ReactComponent as VirtualWordsIcon } from "../../assets/categoriesData/icons/virtualWords.svg";
import { ReactComponent as VideoIcon } from "../../assets/categoriesData/icons/video.svg";
import { ReactComponent as MusicIcon } from "../../assets/categoriesData/icons/music.svg";
import { categoryItems } from "../../constants";

export default function BrowseCategories(): JSX.Element {
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
                  {renderIcon(item.icon)}
                </div>
              </div>
              <div className="h-[67px] w-full md:h-[76px] bg-[#3B3B3B] rounded-b-[20px]">
                <p className="w-full font-semibold sm:text-[16px] text-sm lg:text-[22px] py-[20px] px-2 xsm:px-[10px] md:px-[20px] lg:pb-[30px]">
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

function renderIcon(icon: React.FC<any>) {
  switch (icon) {
    case ArtIcon:
      return <ArtIcon className="size-[80px] lg:size-[100px]" />;
    case CollectionIcon:
      return <CollectionIcon className="size-[80px] lg:size-[100px]" />;
    case UtilityIcon:
      return <UtilityIcon className="size-[80px] lg:size-[100px]" />;
    case PhotographyIcon:
      return <PhotographyIcon className="size-[80px] lg:size-[100px]" />;
    case SportIcon:
      return <SportIcon className="size-[80px] lg:size-[100px]" />;
    case VirtualWordsIcon:
      return <VirtualWordsIcon className="size-[80px] lg:size-[100px]" />;
    case VideoIcon:
      return <VideoIcon className="size-[80px] lg:size-[100px]" />;
    case MusicIcon:
      return <MusicIcon className="size-[80px] lg:size-[100px]" />;
    default:
      return null;
  }
}
