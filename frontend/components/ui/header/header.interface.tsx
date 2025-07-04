export interface HeaderProp {
  name: string;
  href: string;
  color: string;
  size: string;
  variant: string;
  active: boolean;
}

export const headerProps: HeaderProp[] = [
  {
    name: "features",
    href: "/features",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
  {
    name: "customers",
    href: "/customers",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
  {
    name: "about",
    href: "/about",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
];
