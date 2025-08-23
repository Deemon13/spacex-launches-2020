import { Title } from "@mantine/core";

interface TitleAppProps {
  title: string;
}

export const TitleApp = ({ title }: TitleAppProps) => {
  return <Title>{title}</Title>;
};
