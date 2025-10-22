import { Quote, Star } from "lucide-react";
import { useState } from "react";

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "Fortune 500 Company",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "AfroDigital transformed our digital presence completely. Their attention to detail and innovative solutions exceeded all expectations. The team's expertise in AI integration gave us a competitive edge.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      company: "Tech Unicorn",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Working with AfroDigital was a game-changer. They delivered a robust, scalable solution that handles millions of users seamlessly. Their security implementation is top-notch.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director, InnovateCo",
      company: "Industry Leader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "The level of professionalism and technical expertise is unmatched. AfroDigital didn't just build our platform—they helped us reimagine our entire business model.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "David Kim",
      role: "Founder, StartupHub",
      company: "Y Combinator Startup",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "AfroDigital's agile approach and communication throughout the project were exceptional. They turned our vision into reality faster than we thought possible.",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
            <br />
            <span className="text-foreground">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the companies we've helped transform
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="glass-card p-12 rounded-3xl relative overflow-hidden group animate-fade-in-up">
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Quote icon */}
            <div className={`absolute top-8 right-8 w-24 h-24 bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-10 rounded-full flex items-center justify-center`}>
              <Quote className="w-12 h-12 text-accent" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].gradient} p-0.5`}>
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[activeIndex].role}</div>
                  <div className="text-sm text-accent">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial navigation */}
        <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "glass-card p-4 scale-110"
                  : "opacity-50 hover:opacity-100 p-3"
              }`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5 ${
                activeIndex === index ? "shadow-glow" : ""
              }`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {activeIndex === index && (
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br ${testimonial.gradient}`} />
              )}
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "250+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "50+", label: "5-Star Reviews" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default TestimonialsCarousel;
