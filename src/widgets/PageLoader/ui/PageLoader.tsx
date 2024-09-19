import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";
import Spinner from "shared/ui/Spinner/Spinner";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};

export default PageLoader;
