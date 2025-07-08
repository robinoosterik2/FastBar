"use client";

import Link from "next/link";
// import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";

export default function Footer() {
  const { t } = usePageTranslations("footer");

  return (
    <footer className="bg-alt-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-foreground-hover">
            {t("company")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                {t("careers")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                {t("blog")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-foreground-hover">
            {t("product")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/how-it-works" className="hover:underline">
                {t("how_it_works")}
              </Link>
            </li>
            <li>
              <Link href="/for-bars" className="hover:underline">
                {t("for_bars")}
              </Link>
            </li>
            <li>
              <Link href="/for-partygoers" className="hover:underline">
                {t("for_partygoers")}
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                {t("pricing")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-foreground-hover">
            {t("legal")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/privacy" className="hover:underline">
                {t("privacy_policy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                {t("terms_and_conditions")}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                {t("cookie_policy")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-foreground-hover">
            {t("contact")}
          </h3>
          <p className="mt-4 text-sm">
            {t("contact_text")} <br />
            <a
              href="mailto:robinoosterik@gmail.com"
              className="text-primary hover:underline"
            >
              robinoosterik@gmail.com
            </a>
          </p>
          <div className="flex gap-4 mt-6">
            {/* <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-primary"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-primary"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <LinkedinIcon size={20} />
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10 py-6 px-6 text-center text-sm text-foreground/70">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
