import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = ({
  className,
  src,
  size = 128,
  alt = "avatar",
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(styles.Avatar, {}, [className])}
    ></img>
  );
};

export default Avatar;
