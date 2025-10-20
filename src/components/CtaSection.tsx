import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-accent h-1 w-16 mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Free Your Team from Complexity.
          <br />
          Focus on What Matters.
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Modern businesses need modern solutions. AfroDigital eliminates technical barriers, 
          automates workflows, and delivers consistent excellence across all your digital channels.
        </p>
        <Button 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-6 text-lg"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
