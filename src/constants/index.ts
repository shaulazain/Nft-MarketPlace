import collectiblesImg from "../assets/images/collectibles.png";
import musicImg from "../assets/images/music.png";
import photographyImg from "../assets/images/photography.png";
import sportImg from "../assets/images/sport.png";
import utilityImg from "../assets/images/utility.png";
import videoImg from "../assets/images/video.png";
import virtualWorldsImg from "../assets/images/virtualWorlds.png";
import { ReactComponent as ArtIcon } from "../assets/images/icons/art.svg";
import { ReactComponent as CollectionIcon } from "../assets/images/icons/collection.svg";
import { ReactComponent as UtilityIcon } from "../assets/images/icons/utility.svg";
import { ReactComponent as PhotographyIcon } from "../assets/images/icons/photography.svg";
import { ReactComponent as SportIcon } from "../assets/images/icons/sport.svg";
import { ReactComponent as VirtualWordsIcon } from "../assets/images/icons/virtualWords.svg";
import { ReactComponent as VideoIcon } from "../assets/images/icons/video.svg";
import { ReactComponent as MusicIcon } from "../assets/images/icons/music.svg";
import { CategoryItem } from "../types/types";
import artImg from '../assets/images/art.png'

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
