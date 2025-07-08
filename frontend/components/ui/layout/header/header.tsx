"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import React from "react";
import { headerProps } from "./header.data";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import { SmartLink } from "@/components/ui/smartLink";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/buttons/button";

export default function Header() {
  const [isMenuOpen] = React.useState(false);
  const { t } = usePageTranslations("home");

  return (
    <Navbar shouldHideOnScroll isBordered className="py-4">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand>
        <Link
          href="/"
          className="font-bold text-2xl md:text-6xl text-primary hover:text-primary-hover"
        >
          {t("common.fastbar")}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4 items-end">
        {headerProps.slice(2).map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <SmartLink
              color="foreground"
              className="text-xl font-bold"
              href={item.href}
            >
              {t(item.name)}
            </SmartLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="items-end">
        <NavbarItem className="">
          <Button
            as={Link}
            href="/login"
            color="primary"
            className="font-bold hidden md:flex bg-background text-primary text-xl"
          >
            {t("common.login")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/register"
            className="font-bold hidden md:flex bg-primary text-primary-text"
            variant="flat"
          >
            {t("common.register")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-8">
        {headerProps.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <SmartLink
              color="foreground"
              className="font-bold underline"
              href={item.href}
            >
              {t(item.name)}
            </SmartLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
