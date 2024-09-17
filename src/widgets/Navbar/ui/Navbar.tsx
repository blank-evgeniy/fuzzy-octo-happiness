import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink className={styles.link} to={"/"}>
          Main
        </AppLink>
        <AppLink className={styles.link} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
