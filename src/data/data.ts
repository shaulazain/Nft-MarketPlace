import openSeaApi from "../api";
import { AccountInfoResponseType } from "../types/nfts/commonTypes";

export const getArtistName = async (
  address_or_username: string
): Promise<string> => {
  try {
    const response = await openSeaApi.get<AccountInfoResponseType>(
      `/accounts/${address_or_username}`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_OPEN_SEA_KEY || "",
        },
      }
    );

    const artistName = response.data.username || "Unknown artist";
    return artistName;
  } catch (error) {
    console.error("Error fetching artist name:", error);
    return "failed to get user data";
  }
};
