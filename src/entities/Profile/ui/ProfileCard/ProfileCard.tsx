import { classNames, StyleMods } from "shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Input from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import Spinner from "shared/ui/Spinner/Spinner";
import Avatar from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("error")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: StyleMods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          onChange={onChangeFirstname}
          className={styles.input}
          value={data?.firstname}
          placeholder={t("Your firstname")}
          readOnly={readonly}
        />
        <Input
          onChange={onChangeLastname}
          className={styles.input}
          value={data?.lastname}
          placeholder={t("Your lastname")}
          readOnly={readonly}
        />
        <Input
          onChange={onChangeAge}
          className={styles.input}
          value={data?.age}
          placeholder={t("Your age")}
          readOnly={readonly}
          type={"number"}
        />
        <Input
          onChange={onChangeCity}
          className={styles.input}
          value={data?.city}
          placeholder={t("Your city")}
          readOnly={readonly}
        />
        <Input
          onChange={onChangeUsername}
          className={styles.input}
          value={data?.username}
          placeholder={t("Your username")}
          readOnly={readonly}
        />
        <Input
          onChange={onChangeAvatar}
          className={styles.input}
          value={data?.avatar}
          placeholder={t("Your avatar")}
          readOnly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          readonly={readonly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={styles.input}
          readonly={readonly}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
