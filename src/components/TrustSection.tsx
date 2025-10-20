const TrustSection = () => {
  const partners = [
    "Microsoft",
    "AWS",
    "Google Cloud",
    "Salesforce",
    "Adobe",
    "IBM"
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprise organizations, AfroDigital helps teams innovate faster, 
            work smarter, and scale with confidence.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl font-semibold text-foreground/60">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
