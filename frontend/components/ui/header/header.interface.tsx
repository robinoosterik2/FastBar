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
    name: "Home",
    href: "/",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: true,
  },
  {
    name: "Features",
    href: "/features",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
  {
    name: "Customers",
    href: "/customers",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
  {
    name: "Integrations",
    href: "/integrations",
    color: "foreground",
    size: "lg",
    variant: "solid",
    active: false,
  },
];
