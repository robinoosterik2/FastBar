import FadeInOnScroll from "@/components/animations/fadeInOnScroll";
import Employee from "@/components/ui/user/employee";
import { Employees } from "@/components/ui/user/employee.data";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";

export default function TeamSection() {
  const { t } = usePageTranslations("home");
  return (
    <FadeInOnScroll className="w-full py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-primary mb-8">
        {t("common.team")}
      </h1>
      <div className="flex flex-wrap gap-4">
        {Employees.map((employee) => (
          <Employee
            key={employee.name}
            name={employee.name}
            linkText={employee.linkText}
            avatar={employee.avatar}
            link={employee.link}
            className="hover:scale-105 transition-all"
          />
        ))}
      </div>
    </FadeInOnScroll>
  );
}
