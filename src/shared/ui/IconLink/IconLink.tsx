import AppLink, { AppLinkProps } from "../AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";

import styles from "./IconLink.module.scss";

interface IconLinkProps extends AppLinkProps {
  icon: React.ReactNode;
  short?: boolean;
}

const IconLink: FC<IconLinkProps> = (props) => {
  const { icon, short, className, children, ...otherProps } = props;

  return (
    <AppLink
      className={classNames(styles.IconLink, {}, [className])}
      {...otherProps}
    >
      {icon}
      <span className={classNames(styles.content, { [styles.short]: short })}>
        {children}
      </span>
    </AppLink>
  );
};

export default IconLink;
