import type { ReactNode } from "react";

import styles from "./Overlay.module.css";

interface OverlayProps {
  children: ReactNode;
  onClose: () => void;
}

export const Overlay = ({ children, onClose }: OverlayProps) => {
  return (
    <div className={styles.overlay} onClick={() => onClose()}>
      {children}
    </div>
  );
};
