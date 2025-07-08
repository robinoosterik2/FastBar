export interface HeaderProp {
  name: string;
  href: string;
  color: string;
  size: string;
  variant: string;
}

export const headerProps: HeaderProp[] = [
  {
    name: "common.register",
    href: "/register",
    color: "foreground",
    size: "lg",
    variant: "solid",
  },
  {
    name: "common.login",
    href: "/login",
    color: "foreground",
    size: "lg",
    variant: "solid",
  },
  {
    name: "features",
    href: "/features",
    color: "foreground",
    size: "lg",
    variant: "solid",
  },
  {
    name: "venues",
    href: "/venues",
    color: "foreground",
    size: "lg",
    variant: "solid",
  },
  {
    name: "about",
    href: "/about",
    color: "foreground",
    size: "lg",
    variant: "solid",
  },
];
