import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { memo, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const optionList = useMemo(() => {
      return options?.map((opt) => (
        <option className={styles.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      ));
    }, []);

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    };

    return (
      <div className={classNames(styles.Wrapper, {}, [className])}>
        {label && <span className={styles.label}>{label}</span>}
        <select
          disabled={readonly}
          value={value}
          onChange={onChangeHandler}
          className={styles.select}
        >
          {optionList}
        </select>
      </div>
    );
  }
);

export default Select;
