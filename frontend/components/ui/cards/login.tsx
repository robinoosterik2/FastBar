"use client";
import { Form, Input } from "@heroui/react";
import Button from "@/components/ui/buttons/button";
import Password from "@/components/ui/inputs/password";
import { useState } from "react";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import { Link } from "@/i18n/navigation";

export default function LoginCard() {
  const [action, setAction] = useState<string | null>(null);
  const { t } = usePageTranslations("login");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);

    setAction(`submit ${JSON.stringify(data)}`);
  };

  const onReset = () => {
    setAction("reset");
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-primary">{t("title")}</h2>
      <p>
        {t("newUser")}{" "}
        <Link href="/register" className="text-primary underline">
          {t("registerNow")}
        </Link>
      </p>
      <Form
        className="w-fit flex flex-col gap-4 p-8 border-2 rounded-2xl items-center justify-center border-primary"
        onReset={onReset}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 w-fit">
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="inside"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="lg:w-128"
          />

          <Password className="lg:w-128" />

          <Button type="submit" color="primary">
            {t("common.login")}
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </div>
  );
}
