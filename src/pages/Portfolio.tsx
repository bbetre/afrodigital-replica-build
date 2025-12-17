import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hourglass } from "lucide-react";

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-medium text-accent">Our Portfolio</span>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            Crafting Digital
                            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Our team is currently curating our best work. This page will soon showcase the innovative projects we've crafted.
                        </p>
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="py-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary/5 border border-primary/10 rounded-2xl">
                            <Hourglass className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-primary mb-4">
                                Projects Coming Soon!
                            </h2>
                            <p className="text-lg text-primary/80">
                                We are working hard to bring our portfolio to life. Please check back soon to see our amazing work.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Portfolio;
