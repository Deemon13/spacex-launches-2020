import ky from "ky";

const baseURL = "https://api.spacexdata.com/v3/launches";
const queryParams = "launch_year=2020";

export const launches: () => Promise<[]> = async () => {
  const launchesList = await ky.get(`${baseURL}?${queryParams}`).json<[]>();
  return launchesList;
};
