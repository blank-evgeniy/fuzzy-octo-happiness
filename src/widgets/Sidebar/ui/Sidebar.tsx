import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
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
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {">>"}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.language_switcher} />
      </div>
    </div>
  );
};

export default Sidebar;
