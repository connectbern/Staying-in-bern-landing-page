import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header showNavigation={false} />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-sm text-muted-foreground mb-6">Last Updated: October 2, 2025</p>

            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Staying in Bern. We are committed to protecting your personal information and your right to privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform
                  to connect locals and volunteers in Bern, Switzerland.
                </p>
                <p className="text-muted-foreground">
                  If you have any questions or concerns about this policy or our practices regarding your personal information,
                  please contact us at hello@stayinginbern.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Register for an account on our platform</li>
                  <li>Express interest in obtaining information about our services</li>
                  <li>Participate in activities on our platform</li>
                  <li>Contact us for support or inquiries</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
                <p className="text-muted-foreground mb-2">The personal information we collect may include:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                  <li><strong>Profile Information:</strong> Profile photo, bio, preferences, languages spoken</li>
                  <li><strong>Booking Information:</strong> Accommodation details, stay dates, communication with hosts/guests</li>
                  <li><strong>Payment Information:</strong> Billing address (payment processing handled by third-party providers)</li>
                  <li><strong>Communication Data:</strong> Messages, reviews, and feedback you provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage data and analytics</li>
                  <li>Cookie and tracking technology data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use your personal information for the following purposes:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Delivery:</strong> To facilitate connections between locals and volunteers</li>
                  <li><strong>Account Management:</strong> To create and manage your account</li>
                  <li><strong>Communication:</strong> To send booking confirmations, updates, and important notices</li>
                  <li><strong>Platform Improvement:</strong> To analyze usage and improve our services</li>
                  <li><strong>Safety and Security:</strong> To detect fraud, ensure platform safety, and comply with legal obligations</li>
                  <li><strong>Marketing:</strong> To send newsletters and promotional content (with your consent)</li>
                  <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Protect Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your personal
                  information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>With Other Users:</strong> Profile information visible to facilitate connections</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights Under GDPR</h2>
                <p className="text-muted-foreground mb-4">
                  As we operate in Switzerland and serve users in the EU, you have the following rights under the General Data
                  Protection Regulation (GDPR):
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                  <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at hello@stayinginbern.com. We will respond to your request within
                  30 days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we
                  will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than Switzerland. We ensure that such
                  transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy
                  periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground"><strong>Staying in Bern</strong></p>
                  <p className="text-muted-foreground">Email: hello@stayinginbern.com</p>
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
