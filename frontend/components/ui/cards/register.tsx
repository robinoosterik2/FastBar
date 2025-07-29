"use client";
import { Form, Input } from "@heroui/react";
import Button from "@/components/ui/buttons/button";
import Password from "@/components/ui/inputs/password"; // Import your Password component
import React from "react";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import { Link } from "@/i18n/navigation";

export default function RegisterCard() {
  const { t } = usePageTranslations("register");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorsPassword, setErrorsPassword] = React.useState<string[]>([]);
  const [errorsConfirmPassword, setErrorsConfirmPassword] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    const newErrors: string[] = [];

    if (password.length < 4) {
      newErrors.push("Password must be 4 characters or more.");
    }
    if (password.length > 30) {
      newErrors.push("Password must be 30 characters or less.");
    }
    if ((password.match(/[a-z]/g) || []).length < 1) {
      newErrors.push("Password must include at least 1 lower case letter");
    }
    if ((password.match(/[A-Z]/g) || []).length < 1) {
      newErrors.push("Password must include at least 1 upper case letter");
    }
    if ((password.match(/[^a-z0-9]/gi) || []).length < 1) {
      newErrors.push("Password must include at least 1 symbol.");
    }
    if ((password.match(/\d/g) || []).length < 1) {
      newErrors.push("Password must include at least 1 number.");
    }
    setErrorsPassword(newErrors);

    const newConfirmErrors: string[] = [];
    if (confirmPassword && password !== confirmPassword) {
      newConfirmErrors.push("Passwords do not match");
    }
    setErrorsConfirmPassword(newConfirmErrors);
  }, [password, confirmPassword]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-primary">{t("title")}</h2>
      <p>
        {t("existingUser")}{" "}
        <Link href="/login" className="text-primary underline">
          {t("loginNow")}
        </Link>
      </p>
      <p>
        {t("barOwners")}{" "}
        <Link href="/register/venue" className="text-primary underline">
          {t("barOwnerRegister")}
        </Link>
      </p>
      <Form
        className="w-fit flex flex-col gap-4 p-8 border-2 rounded-2xl items-center justify-center border-primary"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 w-fit">
          <div className="flex gap-4 md:flex-row flex-col">
            <Input
              isRequired
              label={t("firstName")}
              errorMessage={t("common.pleaseFill")}
              labelPlacement="inside"
              name="firstName"
              placeholder={t("firstNamePlaceholder")}
              className="w-full"
            />
            <Input
              isRequired
              label={t("lastName")}
              errorMessage={t("common.pleaseFill")}
              labelPlacement="inside"
              name="lastName"
              placeholder={t("lastNamePlaceholder")}
              className="w-full"
            />
          </div>

          <Input
            isRequired
            errorMessage={t("emailError")}
            label={t("email")}
            labelPlacement="inside"
            name="email"
            placeholder={t("emailPlaceholder")}
            type="email"
            className="lg:w-128"
          />

          <Password
            name="password"
            label={t("password")}
            placeholder={t("passwordPlaceholder")}
            value={password}
            onValueChange={setPassword}
            errors={errorsPassword}
            showLabel={true}
            className="w-full"
          />

          <Password
            name="confirmPassword"
            label={t("confirmPassword")}
            placeholder={t("confirmPasswordPlaceholder")}
            value={confirmPassword}
            onValueChange={setConfirmPassword}
            errors={errorsConfirmPassword}
            showLabel={true}
            className="w-full"
          />
          <Button type="submit" color="primary" className="mt-4">
            {t("common.register")}
          </Button>
        </div>
      </Form>
    </div>
  );
}
