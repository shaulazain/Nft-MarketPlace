import { useState, useEffect } from 'react';
import openSeaApi from '../api';
import { AccountInfoResponseType } from '../types/types';

const useFetchArtistName = (address_or_username: string): string => {
  const [artistName, setArtistName] = useState<string>('Unknown artist');

  useEffect(() => {
    const fetchArtistName = async () => {
      try {
        const response = await openSeaApi.get<AccountInfoResponseType>(
          `/accounts/${address_or_username}`,
          {
            headers: {
              "x-api-key": process.env.REACT_APP_OPEN_SEA_KEY || "",
            },
          }
        );

        const name = response.data.username || 'Unknown artist';
        setArtistName(name);
      } catch (error) {
        console.error("Error fetching artist name:", error);
        setArtistName('failed to get user data');
      }
    };

    if (address_or_username) {
      fetchArtistName();
    }
  }, [address_or_username]);

  return artistName;
};

export default useFetchArtistName;
