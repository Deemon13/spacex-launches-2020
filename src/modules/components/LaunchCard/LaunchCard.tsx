import { Card } from "@mantine/core";

import { type LaunchData } from "../../services";

import ImageHolder from "../../../assets/image-holder.jpg";

import styles from "./LaunchCard.module.css";

interface LaunchCardProps {
  item: LaunchData;
}

export const LaunchCard = ({ item }: LaunchCardProps) => {
  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      className={styles["launch-card"]}
    >
      <div className={styles["launch-card__data"]}>
        <img
          src={
            item.mission_patch_small ? item.mission_patch_small : ImageHolder
          }
          alt={item.mission_name}
          width={75}
          height={75}
          className={styles["launch-card__img"]}
        />
        <p className={styles["launch-card__mission-name"]}>
          {item.mission_name}
        </p>
        <p className={styles["launch-card__rocket-name"]}>{item.rocket_name}</p>
      </div>

      <button className={styles["launch-card__btn"]}>See more</button>
    </Card>
  );
};
