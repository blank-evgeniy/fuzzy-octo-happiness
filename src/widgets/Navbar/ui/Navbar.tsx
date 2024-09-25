import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import Button from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import Modal from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>{t("Title")}</h1>
      <Button className={styles.link} onClick={onToggleModal}>
        {t("login")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>
    </div>
  );
};

export default Navbar;
