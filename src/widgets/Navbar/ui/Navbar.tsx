import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import Button from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUthername";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>{t("Title")}</h1>
      <Button className={styles.link} onClick={handleOpenModal}>
        {t("login")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal}></LoginModal>
    </div>
  );
};

export default Navbar;
