import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header showNavigation={false} />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-sm text-muted-foreground mb-6">Last Updated: October 2, 2025</p>

            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit
                  our website. They help us provide you with a better experience by remembering your preferences and understanding
                  how you use our platform.
                </p>
                <p className="text-muted-foreground">
                  Cookies are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Why We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">We use cookies for several important reasons:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Essential Functionality:</strong> To enable core features like user authentication and security</li>
                  <li><strong>User Experience:</strong> To remember your preferences and settings</li>
                  <li><strong>Analytics:</strong> To understand how visitors use our website and improve our services</li>
                  <li><strong>Performance:</strong> To optimize website speed and functionality</li>
                  <li><strong>Marketing:</strong> To deliver relevant content and advertisements (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.1 Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are strictly necessary for the website to function properly. They enable core functionality such as
                  security, network management, and accessibility.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
                    <li><strong>Security cookies:</strong> Protect against security threats</li>
                    <li><strong>Language preferences:</strong> Remember your selected language</li>
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm italic">
                  Note: These cookies cannot be disabled as they are essential for the website to work.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information
                  anonymously. We use this data to improve our services.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>What we track:</strong></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Pages visited and time spent on each page</li>
                    <li>How you arrived at our website (referral source)</li>
                    <li>Device and browser information</li>
                    <li>General location data (country/city level)</li>
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm">
                  <strong>Services we use:</strong> Google Analytics, Vercel Analytics
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.3 Functional Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies enable enhanced functionality and personalization, such as videos and live chats. They may be set
                  by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Remembering your chat preferences</li>
                    <li>Video playback settings</li>
                    <li>User interface customizations</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.4 Marketing/Advertising Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests.
                  They also help us measure the effectiveness of advertising campaigns.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>What they do:</strong></p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Deliver targeted advertisements</li>
                    <li>Limit the number of times you see an ad</li>
                    <li>Measure advertising campaign effectiveness</li>
                    <li>Build a profile of your interests</li>
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm">
                  <strong>Services we use:</strong> Meta Pixel, Google Ads (when applicable)
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and
                  we recommend you check the third-party websites for more information about their cookies.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">Third-party services we use:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>YouTube (for embedded videos)</li>
                    <li>Google Analytics (for website analytics)</li>
                    <li>Social media platforms (Facebook, Instagram, LinkedIn)</li>
                    <li>Payment processors (for secure transactions)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. How to Manage Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in
                  several ways:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.1 Cookie Consent Banner</h3>
                <p className="text-muted-foreground mb-4">
                  When you first visit our website, you will see a cookie consent banner where you can choose to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.2 Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Most web browsers allow you to control cookies through their settings. You can usually find these settings in the
                  "Options" or "Preferences" menu of your browser. Here are links to cookie settings for popular browsers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.3 Opt-Out Tools</h3>
                <p className="text-muted-foreground mb-4">
                  You can opt out of certain advertising cookies through these tools:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Your Online Choices: <span className="text-primary">www.youronlinechoices.eu</span></li>
                  <li>Network Advertising Initiative: <span className="text-primary">www.networkadvertising.org</span></li>
                  <li>Digital Advertising Alliance: <span className="text-primary">www.aboutads.info</span></li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Important:</strong> If you block or delete cookies, some features of our website may not work properly,
                    and your user experience may be degraded.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Do Not Track Signals</h2>
                <p className="text-muted-foreground">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your
                  online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. At present,
                  our website does not respond to DNT browser signals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookie Retention</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies may be stored on your device for varying periods:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them (typically 1-24 months)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Cookie Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational,
                  legal, or regulatory reasons. We encourage you to review this policy periodically. The "Last Updated" date at
                  the top of this page indicates when the policy was last revised.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground"><strong>Staying in Bern</strong></p>
                  <p className="text-muted-foreground">Email: hello@stayinginbern.ch</p>
                  <p className="text-muted-foreground">Location: Bern, Switzerland</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
