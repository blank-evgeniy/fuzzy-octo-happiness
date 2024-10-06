import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import Select from "shared/ui/Select/Select";

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(
  ({ value, onChange, readonly, className }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, []);

    return (
      <Select
        className={className}
        value={value}
        onChange={onChangeHandler}
        label={t("Yout currency")}
        options={options}
        readonly={readonly}
      />
    );
  }
);
