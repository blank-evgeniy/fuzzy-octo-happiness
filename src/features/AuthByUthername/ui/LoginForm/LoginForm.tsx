import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./LoginForm.module.scss";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        placeholder={t("Enter username")}
        type="text"
        className={styles.input}
      />
      <Input
        placeholder={t("Enter password")}
        type="password"
        className={styles.input}
      />
      <Button className={styles.loginBtn}>{t("Log in")}</Button>
    </div>
  );
};

export default LoginForm;
