// for collections
export interface CollectionType {
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: false;
  is_nsfw: false;
  trait_offers_enabled: false;
  collection_offers_enabled: true;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: [
    {
      address: string;
      chain: string;
    }
  ];
}

export interface GetCollectionsResponse {
  collections: CollectionType[];
  next: string;
}

// for nfts within collection
export interface fetchNftByCollectionParams {
  collection_slug: string;
  limit?: number
}

export interface NftType {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
}

export interface GetNftsByCollectionResponse {
  nfts: NftType[];
  next: string;
}

// nft
interface Trait {
  trait_type: string;
  display_type: string;
  max_value: string;
  value: number;
}

interface Owner {
  address: string;
  quantity: number;
}

interface RankingFeatures {
  unique_attribute_count: number;
}

interface Rarity {
  strategy_version: string;
  rank: number;
  score: number;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
  ranking_features: RankingFeatures;
}

interface SingleNftType {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  animation_url: string;
  is_suspicious: boolean;
  creator: string;
  traits: Trait[];
  owners: Owner[];
  rarity: Rarity;
}

export interface getNftParamsType {
  identifier: string;
  contract: string;
}

export interface GetNftResponse {
  nft: SingleNftType;
}

// for owner info
export interface AccountInfoResponseType {
  address: string;
  username: string;
  profile_image_url: string;
  banner_image_url: string;
  website: string;
  social_media_accounts: {
    platform: string;
    username: string;
  }[];
  bio: string;
  joined_date: string;
}
