import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text = memo(
  ({ className, text, title, theme = TextTheme.PRIMARY }: TextProps) => {
    return (
      <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
        {title && <p className={styles.title}>{title}</p>}
        <p className={styles.text}>{text}</p>
      </div>
    );
  }
);

export default Text;
