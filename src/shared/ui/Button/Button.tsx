import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import React, { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
