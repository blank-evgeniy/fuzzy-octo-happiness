import { classNames } from "shared/lib/classNames/classNames";
import { FC, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import IconLink from "shared/ui/IconLink/IconLink";

import styles from "./Sidebar.module.scss";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const isAuth = useSelector(getUserAuthData);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemsList.filter((item) => !(item.authOnly && !isAuth)).map(
        (item) => (
          <IconLink
            Icon={item.icon}
            short={collapsed}
            to={item.path}
            key={item.path}
          >
            {t(item.text)}
          </IconLink>
        )
      ),
    [collapsed, isAuth]
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.items}>{itemsList}</div>
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
