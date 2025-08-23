import { SimpleGrid, Card } from "@mantine/core";

import { type LaunchData } from "../../modules/services";

import styles from "./LaunchesList.module.css";

interface launchesListProps {
  launchesList: LaunchData[];
}

export const LaunchesList = ({ launchesList }: launchesListProps) => {
  return (
    <SimpleGrid
      cols={3}
      spacing="xs"
      verticalSpacing="xs"
      className={styles["launches-list"]}
    >
      {launchesList.map((item) => {
        return (
          <Card
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
            key={item.mission_name}
          >
            {item.mission_name}
          </Card>
        );
      })}
    </SimpleGrid>
  );
};
