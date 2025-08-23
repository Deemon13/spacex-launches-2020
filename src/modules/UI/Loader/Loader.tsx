import styles from "./Loader.module.css";

interface LoaderProps {
  innerText: string;
}

export const Loader = ({ innerText }: LoaderProps) => {
  return <div className={styles.loader}>{innerText}</div>;
};
