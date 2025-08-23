import "./App.css";
import { useEffect, useReducer } from "react";
import { MantineProvider } from "@mantine/core";

import {
  launches,
  type LaunchData,
  type LaunchInterface,
} from "../../modules/services";

import { LaunchesList } from "../../pages";
import { TitleApp, Loader } from "../../modules/UI";

interface launchesDataInterface {
  launchesData: LaunchData[];
}

const initialState = { launchesData: [] };

function launchesReducer(
  state: launchesDataInterface,
  action: { type: string; payload: LaunchData[] }
) {
  switch (action.type) {
    case "get_data":
      return {
        launchesData: action.payload,
      };
    default:
      return state;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);

  useEffect(() => {
    launches().then((data: LaunchInterface[]) => {
      const launchesEdit: LaunchData[] = data.map((launch) => {
        return {
          mission_name: launch.mission_name,
          rocket_name: launch.rocket?.rocket_name,
          mission_patch: launch.links?.mission_patch,
          mission_patch_small: launch.links?.mission_patch_small,
          details: launch.details,
        };
      });

      dispatch({ type: "get_data", payload: launchesEdit });
    });
  }, []);

  return (
    <MantineProvider>
      <TitleApp title="SpaceX Launches 2020" />
      {state.launchesData.length ? (
        <LaunchesList launchesList={state.launchesData} />
      ) : (
        <Loader innerText={"Loading..."} />
      )}
    </MantineProvider>
  );
};
