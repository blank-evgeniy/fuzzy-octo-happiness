import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { useTranslation } from "react-i18next";
import Text from "shared/ui/Text/Text";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("Profile")} />
        <Button className={styles.editBtn}>{t("edit")}</Button>
      </div>
      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.firstname}
          placeholder={t("Your firstname")}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t("Your lastname")}
        />
      </div>
    </div>
  );
};
