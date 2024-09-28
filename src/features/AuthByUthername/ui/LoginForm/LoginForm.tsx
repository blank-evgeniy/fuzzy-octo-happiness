import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./LoginForm.module.scss";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/AuthByUthername/model/selectors/getLoginUsername";
import { getLoginPassword } from "features/AuthByUthername/model/selectors/getLoginPassword";
import { getLoginError } from "features/AuthByUthername/model/selectors/getLoginError";
import { getLoginIsLoading } from "features/AuthByUthername/model/selectors/getLoginIsLoading";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Authorization form")} />
        {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
        <Input
          placeholder={t("Enter username")}
          type="text"
          className={styles.input}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t("Enter password")}
          type="password"
          className={styles.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={styles.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Log in")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
