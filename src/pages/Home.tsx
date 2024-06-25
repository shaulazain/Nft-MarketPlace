import BrowseCategories from "../components/BrowseCategory/BrowseCategories";
import NftHighlight from "../components/NftHighlight/NftHighlight";
import DiscoverMoreNfts from "../components/discoverMoreNfts/DiscoverMoreNfts";
import Hero from "../components/Hero/Hero";
import TrendingCollection from "../components/trendingCollection/TrendingCollection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import SubscribeWidget from "../components/SubscribeWidget/SubscribeWidget";

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
