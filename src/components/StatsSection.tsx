const StatsSection = () => {
  const stats = [
    {
      value: "90%",
      label: "faster deployment"
    },
    {
      value: "70%",
      label: "reduced development costs"
    },
    {
      value: "500+",
      label: "projects delivered"
    },
    {
      value: "50k+",
      label: "hours of development expertise"
    },
    {
      value: "100%",
      label: "security compliance"
    },
    {
      value: "24/7",
      label: "support availability"
    }
  ];
  
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Excellence with AfroDigital
          </h2>
          <p className="text-lg opacity-90">
            Proven Results from Real Projects and Client Success Stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/20"
            >
              <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
