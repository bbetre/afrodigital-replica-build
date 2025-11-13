import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-center text-muted-foreground mb-12">Last Updated: July 26, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by AfroDigital ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions, you must not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">2. Description of Service</h2>
              <p>
                AfroDigital provides a range of technology services, including but not limited to software development, AI integration, cybersecurity, and digital marketing. These services are provided subject to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">3. User Responsibilities</h2>
              <p>
                You agree to use our services in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">4. Intellectual Property</h2>
              <p>
                All content and materials available on our website, including but not limited to text, graphics, logos, and software, are the property of AfroDigital or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, AfroDigital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Ethiopia, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;