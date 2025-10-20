import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime SLA", prefix: "" },
  { value: 3, suffix: "x", label: "Faster Deployment", prefix: "" },
  { value: 50, suffix: "%", label: "Cost Reduction", prefix: "" },
  { value: 24, suffix: "/7", label: "Support Available", prefix: "" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(increment * currentStep, stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_50%)] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Proven Results
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            Numbers That Matter
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-200% animate-gradient-shift group-hover:scale-110 transition-transform duration-300">
                  {stat.prefix}
                  {stat.value % 1 === 0 ? Math.round(counts[index]) : counts[index].toFixed(1)}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
