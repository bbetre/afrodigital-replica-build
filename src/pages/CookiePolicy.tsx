import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Cookie Policy</h1>
          <p className="text-center text-muted-foreground mb-12">Last Updated: July 26, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">2. How We Use Cookies</h2>
              <p>
                We use cookies for several purposes:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
                <li><strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website and enable us to personalize our content for you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">3. How to Manage Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">4. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;