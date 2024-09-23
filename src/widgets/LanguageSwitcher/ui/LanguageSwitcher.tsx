import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

const LanguageSwitcher = ({
  className,
  short = false,
}: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LanguageSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {short ? t("current language_short") : t("current language")}
    </Button>
  );
};

export default LanguageSwitcher;
