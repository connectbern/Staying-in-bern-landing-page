import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Header showNavigation={false} />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-sm text-muted-foreground mb-6">Last Updated: October 2, 2025</p>

            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Staying in Bern. By accessing or using our platform, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing this platform.
                </p>
                <p className="text-muted-foreground">
                  These terms apply to all users of the platform, including locals, volunteers, visitors, and any other users.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  Staying in Bern is a community platform that connects local residents of Bern, Switzerland with volunteers
                  and travelers seeking authentic cultural experiences and accommodation opportunities. We facilitate:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Connections between locals and volunteers</li>
                  <li>Cultural exchange and community building</li>
                  <li>Accommodation arrangements and social events</li>
                  <li>Language exchange opportunities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.1 Account Registration</h3>
                <p className="text-muted-foreground mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Acceptable Use</h3>
                <p className="text-muted-foreground mb-4">You agree NOT to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the platform for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Harass, abuse, or harm another person</li>
                  <li>Provide false or misleading information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the platform or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the platform</li>
                  <li>Use the platform for commercial purposes without our permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Booking and Accommodation Terms</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 Booking Process</h3>
                <p className="text-muted-foreground mb-4">
                  When you make a booking through our platform, you enter into a direct agreement with the host. Staying in Bern
                  facilitates the connection but is not a party to the accommodation arrangement.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Payment Terms</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>All fees and charges are clearly displayed before booking confirmation</li>
                  <li>Payment is processed through secure third-party payment providers</li>
                  <li>You are responsible for all applicable taxes and fees</li>
                  <li>Prices are subject to change without notice</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 Cancellation Policy</h3>
                <p className="text-muted-foreground mb-4">
                  Cancellation policies vary by host and booking. Please review the specific cancellation terms before confirming
                  your booking. General guidelines:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Flexible:</strong> Full refund up to 24 hours before check-in</li>
                  <li><strong>Moderate:</strong> Full refund up to 5 days before check-in</li>
                  <li><strong>Strict:</strong> 50% refund up to 7 days before check-in</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Service fees are non-refundable unless otherwise stated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Content and Conduct</h2>
                <p className="text-muted-foreground mb-4">
                  You retain ownership of content you post on the platform, but you grant us a license to use, display, and
                  distribute it in connection with our services.
                </p>
                <p className="text-muted-foreground mb-4">You represent and warrant that:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You own or have the necessary rights to the content you post</li>
                  <li>Your content does not violate any third-party rights</li>
                  <li>Your content complies with these Terms of Service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Staying in Bern is not liable for any indirect, incidental, special, or consequential damages</li>
                  <li>We do not guarantee the accuracy, completeness, or usefulness of any information on the platform</li>
                  <li>We are not responsible for the conduct of any user or the quality of accommodations</li>
                  <li>Our total liability shall not exceed the amount paid by you in the past 12 months</li>
                </ul>
                <p className="text-muted-foreground">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for
                  consequential damages, so some of the above limitations may not apply to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  The platform is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied,
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>The platform will meet your requirements</li>
                  <li>The platform will be uninterrupted, timely, secure, or error-free</li>
                  <li>Results obtained from using the platform will be accurate or reliable</li>
                  <li>Any errors in the platform will be corrected</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold Staying in Bern, its affiliates, officers, directors, employees, and agents
                  harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Your use of the platform</li>
                  <li>Your violation of these Terms of Service</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your content posted on the platform</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Dispute Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  In the event of any dispute arising from or relating to these Terms of Service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>We encourage you to first contact us to seek an informal resolution</li>
                  <li>If informal resolution fails, disputes will be resolved through binding arbitration</li>
                  <li>Arbitration will be conducted in Bern, Switzerland</li>
                  <li>Swiss law will govern these Terms of Service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Terminate or suspend your account immediately, without prior notice, for any breach of these Terms</li>
                  <li>Remove any content that violates these Terms or is otherwise objectionable</li>
                  <li>Refuse service to anyone for any reason at any time</li>
                </ul>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the platform will immediately cease. All provisions of these Terms which
                  by their nature should survive termination shall survive.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes
                  via email or through the platform. Your continued use of the platform after such modifications constitutes your
                  acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The platform and its original content, features, and functionality are owned by Staying in Bern and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  You may not use our trademarks or intellectual property without our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground"><strong>Staying in Bern</strong></p>
                  <p className="text-muted-foreground">Email: hello@stayinginbern.com</p>
                  <p className="text-muted-foreground">Location: Bern, Switzerland</p>
                </div>
              </section>

              <section className="mb-8">
                <p className="text-muted-foreground italic">
                  By using Staying in Bern, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
