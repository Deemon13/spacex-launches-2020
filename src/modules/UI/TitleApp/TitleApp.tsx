import { Title } from "@mantine/core";

import styles from "./TitleApp.module.css";

interface TitleAppProps {
  title: string;
}

export const TitleApp = ({ title }: TitleAppProps) => {
  return <Title className={styles["title-app"]}>{title}</Title>;
};
