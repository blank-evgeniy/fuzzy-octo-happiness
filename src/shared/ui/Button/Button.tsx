import { classNames, StyleMods } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";
import React, { ButtonHTMLAttributes, memo } from "react";

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
  children?: React.ReactNode;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square = false,
    size = ButtonSize.M,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
  } = props;

  const mods: StyleMods = {
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
});

export default Button;
