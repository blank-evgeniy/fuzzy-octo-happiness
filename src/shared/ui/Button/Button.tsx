import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import React, { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
  INHERIT = "inherit",
}

export enum ButtonSize {
  S = "size-s",
  M = "size-m",
  L = "size-l",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    square = false,
    size = ButtonSize.M,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [
        className,
        styles[theme],
        styles[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
