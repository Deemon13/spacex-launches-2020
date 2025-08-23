import "./App.css";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";

import { launches } from "../../modules/services";

import { TitleApp } from "../../modules/UI";

export const App = () => {
  // const [launches2020, setLaunches2020] = useState([]);

  useEffect(() => {
    launches().then((data) => console.log(data));
  }, []);

  return (
    <MantineProvider>
      <TitleApp title="SpaceX Launches 2020" />
    </MantineProvider>
  );
};
