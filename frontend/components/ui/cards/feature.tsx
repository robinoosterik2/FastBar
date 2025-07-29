import FadeInOnScroll from "@/components/animations/fadeInOnScroll";

export default function FeatureCard({ feature }: { feature: { title: string; description: string } }) {
  return (
    <FadeInOnScroll>
      <div className="bg-background rounded-xl border-2 border-primary hover:border-primary/50 shadow-lg shadow-primary p-6">
        <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
        <p className="text-foreground">{feature.description}</p>
      </div>
    </FadeInOnScroll>
  );
}
