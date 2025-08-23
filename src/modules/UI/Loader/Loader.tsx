import { Loader } from "@mantine/core";

import styles from "./Loader.module.css";

interface LoaderProps {
  innerText: string;
}

export const LoaderComp = ({ innerText }: LoaderProps) => {
  return (
    <>
      <div className={styles.loader}>{innerText}</div>
      <Loader color="#4b0082" size={50} />
    </>
  );
};
