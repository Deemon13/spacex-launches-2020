import { SimpleGrid } from "@mantine/core";

import { type LaunchData } from "../../modules/services";

import { LaunchCard } from "../../modules/components";

import styles from "./LaunchesList.module.css";

interface launchesListProps {
  launchesList: LaunchData[];
  onOpen: () => void;
}

export const LaunchesList = ({ launchesList, onOpen }: launchesListProps) => {
  return (
    <SimpleGrid
      cols={3}
      spacing="xs"
      verticalSpacing="xs"
      className={styles["launches-list"]}
    >
      {launchesList.map((item) => {
        return (
          <LaunchCard key={item.mission_name} item={item} onOpen={onOpen} />
        );
      })}
    </SimpleGrid>
  );
};
