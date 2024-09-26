import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";
import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {!!placeholder && (
        <div className={styles.placeholder}>{`${placeholder}`}</div>
      )}

      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={changeHandler}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
