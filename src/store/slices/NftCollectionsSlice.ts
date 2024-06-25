import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CollectionsState } from "../../types/redux/commonTypes";
import openSeaApi from "../../api";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetCollectionsResponse } from "../../types/nfts/commonTypes";

export const fetchCollections = createAsyncThunk<
  GetCollectionsResponse,
  void,
  { rejectValue: string }
>("NftCollections/fetchCollections", async (_, { rejectWithValue }) => {
  try {
    const response = await openSeaApi.get<GetCollectionsResponse>(
      "/collections??chain=ethereum&order_by=seven_day_volume&limit=6",
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

const initialState: CollectionsState = {
  collections: null,
  loading: "idle",
  error: null,
};

export const collectionsSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        fetchCollections.fulfilled,
        (state, action: PayloadAction<GetCollectionsResponse>) => {
          // Add user to the state array
          state.collections = action.payload;
        }
      )
      .addCase(fetchCollections.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
        }
      });
    // .addCase(fetchCollections.fulfilled,(state, action: PayloadAction<GetCollectionsResponse>) => {
    //   // Add user to the state array
    //   state.collections=(action.payload)
    // })
  },
});

// Action creators are generated for each case reducer function

export default collectionsSlice.reducer;
