import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>{t("Title")}</h1>
    </div>
  );
};

export default Navbar;
