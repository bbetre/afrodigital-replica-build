import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-xl">
          <div className="text-center">
            <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Compliance & Security</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Our commitment to data protection, security, and regulatory adherence.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Our Commitment</h2>
              <p>
                At AfroDigital, we understand that trust is the foundation of our partnership with clients. We are deeply committed to upholding the highest standards of data security, privacy, and compliance with international regulations. Our infrastructure, policies, and procedures are designed to protect your data and ensure operational integrity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">ISO 27001 Certified</h2>
              <p>
                We are proud to be ISO/IEC 27001 certified. This certification demonstrates our commitment to a systematic and ongoing approach to managing sensitive company and customer information. Our Information Security Management System (ISMS) is regularly audited to ensure it meets the stringent requirements of the standard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">GDPR & Data Privacy</h2>
              <p>
                We are fully compliant with the General Data Protection Regulation (GDPR). We are committed to protecting the data rights of individuals and ensuring that personal data is processed lawfully, fairly, and transparently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Contact Us</h2>
              <p>
                For any questions regarding our security and compliance practices, please contact our security team at <a href="mailto:security@afrodigital.et" className="text-accent hover:underline">security@afrodigital.et</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;