import collectiblesImg from "../assets/categoriesData/images/collectibles.png";
import musicImg from "../assets/categoriesData/images/music.png";
import photographyImg from "../assets/categoriesData/images/photography.png";
import sportImg from "../assets/categoriesData/images/sport.png";
import utilityImg from "../assets/categoriesData/images/utility.png";
import videoImg from "../assets/categoriesData/images/video.png";
import virtualWorldsImg from "../assets/categoriesData/images/virtualWorlds.png";
import { ReactComponent as ArtIcon } from "../assets/categoriesData/icons/art.svg";
import { ReactComponent as CollectionIcon } from "../assets/categoriesData/icons/collection.svg";
import { ReactComponent as UtilityIcon } from "../assets/categoriesData/icons/utility.svg";
import { ReactComponent as PhotographyIcon } from "../assets/categoriesData/icons/photography.svg";
import { ReactComponent as SportIcon } from "../assets/categoriesData/icons/sport.svg";
import { ReactComponent as VirtualWordsIcon } from "../assets/categoriesData/icons/virtualWords.svg";
import { ReactComponent as VideoIcon } from "../assets/categoriesData/icons/video.svg";
import { ReactComponent as MusicIcon } from "../assets/categoriesData/icons/music.svg";
import { CategoryItem } from "../types/types";
import artImg from '../assets/categoriesData/images/art.png'

export const categoryItems: CategoryItem[] = [
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
