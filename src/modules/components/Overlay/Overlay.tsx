import type { ReactNode } from "react";

import styles from "./Overlay.module.css";

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

export const Overlay = ({ children, onClose }: OverlayProps) => {
  return (
    <div id="overlay" className={styles.overlay} onClick={() => onClose()}>
      {children}
    </div>
  );
};
