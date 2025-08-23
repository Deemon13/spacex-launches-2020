import { SimpleGrid, Card } from "@mantine/core";

interface LaunchData {
  mission_name?: string;
  rocket_name?: string;
  mission_patch?: string;
  mission_patch_small?: string;
  details?: string;
}

interface launchesListProps {
  launchesList: LaunchData[];
}

export const LaunchesList = ({ launchesList }: launchesListProps) => {
  return (
    <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
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
