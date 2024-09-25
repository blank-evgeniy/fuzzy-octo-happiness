import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    // <Portal>
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
    // </Portal>
  );
};

export default Modal;
