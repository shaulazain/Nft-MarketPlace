import BrowseCategories from "../components/browseCategory/BrowseCategories";
import NftHighlight from "../components/nftHighlight/NftHighlight";
import DiscoverMoreNfts from "../components/discoverMoreNfts/DiscoverMoreNfts";
import Hero from "../components/Hero/Hero";
import TrendingCollection from "../components/trendingCollection/TrendingCollection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import SubscribeWidget from "../components/subscribeWidget/SubscribeWidget";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <TrendingCollection />
      <BrowseCategories />
      <DiscoverMoreNfts />
      <NftHighlight />
      <HowItWorks />
      <SubscribeWidget />
    </>
  );
}
