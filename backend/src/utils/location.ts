import axios from "axios";

const API_LINK = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const PARAM = "&autocomplete=true&fuzzyMatch=false";

export default async (address: string) => {
  const searchText = encodeURIComponent(address);
  const urlForGeoCode = `${API_LINK}/${searchText}.json?access_token=${process.env.API_KEY}${PARAM}`;

  const response = await axios.get(urlForGeoCode);

  if (!response.data.features.length) return undefined;

  const coordintes = response.data.features[0].center;
  return {
    lat: coordintes[1],
    lng: coordintes[0],
  };
};
