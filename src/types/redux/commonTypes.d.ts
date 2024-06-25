import {  GetCollectionsResponse, GetNftResponse, GetNftsByCollectionResponse } from "../nfts/commonTypes"

export interface CollectionsState {
    collections: GetCollectionsResponse |null
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error:string | null
  }

export interface NftsByCollectionState{
  nfts: GetNftsByCollectionResponse | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error:string | null
}

export interface NftState{
  nft:GetNftResponse | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error:string | null
}