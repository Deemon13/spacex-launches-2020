import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "../../components";

import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const modalElement = document.getElementById("modal");

export const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const onEsc = (evt: { code: string }) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <>
      <Overlay onClose={onClose}>
        <div className={styles.modal}>
          {children}
          <button id="close" className={styles.close} onClick={() => onClose()}>
            X
          </button>
        </div>
      </Overlay>
    </>,
    modalElement as HTMLElement
  );
};
