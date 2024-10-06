import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";
import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    readOnly,
    ...otherProps
  } = props;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div
      className={classNames(
        styles.InputWrapper,
        { [styles.readonly]: readOnly },
        [className]
      )}
    >
      {!!placeholder && (
        <div className={styles.placeholder}>{`${placeholder}`}</div>
      )}

      <input
        readOnly={readOnly}
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
