import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
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
