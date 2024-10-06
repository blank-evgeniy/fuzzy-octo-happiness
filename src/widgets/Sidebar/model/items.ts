import { RoutePath } from "app/providers/router/model/routeConfig";

import HomeIcon from "shared/assets/icons/main-link.svg";
import AboutIcon from "shared/assets/icons/about-link.svg";
import ProfileIcon from "shared/assets/icons/user-link.svg";
import { SVGProps, VFC } from "react";

interface SidebarItemType {
  path: string;
  text: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "nav main",
    icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: "nav about",
    icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "nav profile",
    icon: ProfileIcon,
    authOnly: true,
  },
];
