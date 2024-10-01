import AppLink, { AppLinkProps } from "../AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { FC, SVGProps, VFC } from "react";

import styles from "./IconLink.module.scss";

interface IconLinkProps extends AppLinkProps {
  Icon: VFC<SVGProps<SVGSVGElement>>;
  short?: boolean;
}

const IconLink: FC<IconLinkProps> = (props) => {
  const { Icon, short, className, children, ...otherProps } = props;

  return (
    <AppLink
      className={classNames(styles.IconLink, {}, [className])}
      {...otherProps}
    >
      {<Icon />}
      <span className={classNames(styles.content, { [styles.short]: short })}>
        {children}
      </span>
    </AppLink>
  );
};

export default IconLink;
