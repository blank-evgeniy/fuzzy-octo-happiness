import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfilePage.module.scss";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileValidateError } from "entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateError);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Unеxpected error"),
    [ValidateProfileError.EMPTY_FIELD]: t("Fill in all the fields"),
    [ValidateProfileError.INCORRECT_AGE]: t("Enter the correct age"),
    [ValidateProfileError.NO_DATA]: t("Fill in all the fields"),
  };

  useEffect(() => {
    if (PROJECT !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: +value || undefined }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
