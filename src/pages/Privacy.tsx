import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-12">Last Updated: July 26, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">1. Introduction</h2>
              <p>
                AfroDigital ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number when you fill out a contact form. We also collect non-personal information, such as browser type, operating system, and website usage data through cookies and other tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Communicate with you about promotions, upcoming events, and other news.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">4. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">5. Your Data Rights</h2>
              <p>
                Depending on your location, you may have rights under data protection laws, including the right to access, correct, or delete your personal information. To exercise these rights, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;