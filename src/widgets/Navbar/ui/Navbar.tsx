import { classNames } from "shared/lib/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>{t("Title")}</h1>
      <div className={styles.links}>
        <AppLink className={styles.link} to={"/"}>
          {t("nav main")}
        </AppLink>
        <AppLink className={styles.link} to={"/about"}>
          {t("nav about")}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
