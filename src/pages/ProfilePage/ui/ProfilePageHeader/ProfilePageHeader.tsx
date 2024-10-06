import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfilePageHeader.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Text from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useCallback } from "react";

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t("Profile")} />
      {readonly ? (
        <Button onClick={onEdit} className={styles.editBtn}>
          {t("edit")}
        </Button>
      ) : (
        <div className={styles.btn_group}>
          <Button
            onClick={onCancelEdit}
            className={styles.editBtn}
            theme={ButtonTheme.DANGER}
          >
            {t("cancel")}
          </Button>
          <Button onClick={onSave} className={styles.editBtn}>
            {t("save")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePageHeader;
