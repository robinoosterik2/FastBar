"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import React from "react";
import { headerProps } from "./header.interface";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import { Link as LinkComponent } from "@/i18n/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = usePageTranslations("home");

  return (
    <Navbar shouldHideOnScroll>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit text-3xl">FastBar</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {headerProps.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#">
              {t(item.name)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <LinkComponent href="#">{t("login")}</LinkComponent>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            {t("register")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {headerProps.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === headerProps.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {t(item.name)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
