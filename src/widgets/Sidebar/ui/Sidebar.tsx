import { classNames } from "shared/lib/classNames/classNames";
import { FC, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import IconLink from "shared/ui/IconLink/IconLink";

import HomeIcon from "shared/assets/icons/main-link.svg";
import AboutIcon from "shared/assets/icons/about-link.svg";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.items}>
        <IconLink icon={<HomeIcon />} short={collapsed} to={"/"}>
          {t("nav main")}
        </IconLink>
        <IconLink icon={<AboutIcon />} short={collapsed} to={"/about"}>
          {t("nav main")}
        </IconLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.INHERIT}
        square
        className={styles.collapseBtn}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          short={collapsed}
          className={styles.language_switcher}
        />
      </div>
    </div>
  );
};

export default Sidebar;
