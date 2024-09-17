import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={"32"} height={"32"} />
      ) : (
        <LightIcon width={"32"} height={"32"} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
