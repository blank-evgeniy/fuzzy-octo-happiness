import { classNames } from "shared/lib/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>Title</h1>
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
