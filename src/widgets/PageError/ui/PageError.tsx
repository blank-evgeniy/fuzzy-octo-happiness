import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p className={styles.errorMessage}>
        {t("An unexpected error has occurred")}
      </p>
      <button className={styles.btn} onClick={reloadPage}>
        {t("Reload page")}
      </button>
    </div>
  );
};

export default PageError;
