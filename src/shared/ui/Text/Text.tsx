import { classNames, StyleAdditional } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  }: TextProps) => {
    const additional: StyleAdditional = [styles[theme], styles[align]];

    return (
      <div className={classNames(styles.Text, {}, [className, ...additional])}>
        {title && <p className={styles.title}>{title}</p>}
        <p className={styles.text}>{text}</p>
      </div>
    );
  }
);

export default Text;
