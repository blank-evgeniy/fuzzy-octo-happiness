import { Country } from "entities/Country/model/types/country";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Select from "shared/ui/Select/Select";

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Russia, content: Country.Russia },
];

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo(
  ({ value, onChange, readonly, className }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country);
    }, []);

    return (
      <Select
        className={className}
        value={value}
        onChange={onChangeHandler}
        label={t("Your country")}
        options={options}
        readonly={readonly}
      />
    );
  }
);
