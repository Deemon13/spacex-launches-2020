import ky from "ky";

import type { LaunchInterface } from "./interfaces";

const baseURL = "https://api.spacexdata.com/v3/launches";
const queryParams = "launch_year=2020";

export const launches: () => Promise<LaunchInterface[]> = async () => {
  const launchesList = await ky.get(`${baseURL}?${queryParams}`).json<[]>();
  return launchesList;
};
