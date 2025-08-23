import "./App.css";
import { useEffect, useReducer } from "react";
import { MantineProvider } from "@mantine/core";

import { launches } from "../../modules/services";

import { LaunchesList } from "../../pages";
import { TitleApp } from "../../modules/UI";

interface LaunchInterface {
  mission_name: string;
  rocket?: {
    rocket_name?: string;
  };
  links?: {
    mission_patch?: string;
    mission_patch_small?: string;
  };
  details?: string;
}
interface LaunchData {
  mission_name?: string;
  rocket_name?: string;
  mission_patch?: string;
  mission_patch_small?: string;
  details?: string;
}

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
        // <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        //   {state.launchesData.map((item) => {
        //     return (
        //       <Card
        //         shadow="sm"
        //         padding="md"
        //         radius="md"
        //         withBorder
        //         key={item.mission_name}
        //       >
        //         {item.mission_name}
        //       </Card>
        //     );
        //   })}
        // </SimpleGrid>
        <div>Loading...</div>
      )}
    </MantineProvider>
  );
};
