import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetNftResponse, getNftParamsType } from "../../types/nfts/commonTypes";
import { NftState } from "../../types/redux/commonTypes";
import { AxiosResponse } from "axios";
import openSeaApi from "../../api";

export const fetchNft = createAsyncThunk<
  GetNftResponse,
  getNftParamsType,
  { rejectValue: string }
>("Nft/fetchNft", async (data: getNftParamsType, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<GetNftResponse> =
      await openSeaApi.get<GetNftResponse>(
        `/chain/ethereum/contract/${data.contract}/nfts/${data.identifier}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": `${process.env.REACT_APP_OPEN_SEA_KEY}`,
          },
        }
      );
    return response.data;
  } catch (error) {
    return rejectWithValue("There was an error fetching the data");
  }
});

const initialState: NftState = {
  nft: null,
  loading: "idle",
  error: null,
};

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    clearNfts: (state) => {
      state.nft = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNft.pending, (state) => {
        state.loading = "pending"; // Set loading state to 'pending' when request starts
      })
      .addCase(
        fetchNft.fulfilled,
        (state, action: PayloadAction<GetNftResponse>) => {
          state.nft = action.payload; // Update state with fetched data on success
          state.loading = "succeeded"; // Set loading state to 'succeeded' after successful fetch
          state.error = null; // Reset error state on successful fetch
        }
      )
      .addCase(fetchNft.rejected, (state, action) => {
        state.loading = "failed"; // Set loading state to 'failed' on fetch failure
        state.error = action.payload as string; // Store error message in state
      });
  },
});
export const { clearNfts } = nftSlice.actions;
export default nftSlice.reducer;
