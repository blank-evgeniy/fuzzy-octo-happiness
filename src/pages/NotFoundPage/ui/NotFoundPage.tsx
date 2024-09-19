import { classNames } from "shared/lib/classNames/classNames";
import styles from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("the page was not found")}
    </div>
  );
};

export default NotFoundPage;
