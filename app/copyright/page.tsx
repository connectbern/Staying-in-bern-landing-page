import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CopyrightNoticePage() {
  return (
    <>
      <Header showNavigation={false} />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-sm text-muted-foreground mb-6">Last Updated: October 2, 2025</p>

            <h1 className="text-4xl font-bold text-foreground mb-8">Copyright Notice</h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Copyright Ownership</h2>
                <p className="text-muted-foreground mb-4">
                  © 2025 Staying in Bern. All rights reserved.
                </p>
                <p className="text-muted-foreground mb-4">
                  All content, materials, information, data, text, graphics, logos, button icons, images, audio clips, video clips,
                  digital downloads, software, and other materials (collectively, "Content") available on or through the Staying in
                  Bern website and platform are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  The Content is owned by Staying in Bern, its licensors, or other providers of such material and is protected by
                  Swiss and international copyright laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Permitted Use</h2>
                <p className="text-muted-foreground mb-4">
                  You may access and use the Content only for personal, non-commercial purposes, subject to the following conditions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create
                    derivative works from, transfer, or sell any Content without our prior written permission</li>
                  <li>You may not remove any copyright, trademark, or other proprietary notices from the Content</li>
                  <li>You may not use the Content for commercial purposes without our express written consent</li>
                  <li>Any permitted use must include proper attribution to Staying in Bern</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Trademarks</h2>
                <p className="text-muted-foreground mb-4">
                  "Staying in Bern," the Staying in Bern logo, and other marks used on our platform are trademarks or registered
                  trademarks of Staying in Bern. These trademarks may not be used without our prior written permission.
                </p>
                <p className="text-muted-foreground">
                  All other trademarks, service marks, and logos used on our platform are the property of their respective owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. User-Generated Content</h2>
                <p className="text-muted-foreground mb-4">
                  When you post, upload, or submit content to our platform (including but not limited to photos, reviews, comments,
                  and messages), you retain ownership of your content. However, you grant Staying in Bern the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>A worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare
                    derivative works of, display, and perform your content in connection with our services</li>
                  <li>The right to use your name and likeness in connection with your content</li>
                  <li>The right to sublicense these rights to our service providers and partners</li>
                </ul>
                <p className="text-muted-foreground">
                  By posting content, you represent and warrant that you own or have the necessary rights to grant this license
                  and that your content does not violate any third-party rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Attribution Requirements</h2>
                <p className="text-muted-foreground mb-4">
                  If you are granted permission to use any of our Content, you must provide proper attribution as follows:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Required Attribution Format:</strong></p>
                  <p className="text-sm font-mono text-foreground">
                    "Content courtesy of Staying in Bern (www.stayinginbern.ch)"
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Attribution must be clearly visible and in close proximity to the Content used. The specific format and
                  placement may be adjusted based on the medium and context of use, but the attribution must remain clear
                  and unambiguous.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Content</h2>
                <p className="text-muted-foreground mb-4">
                  Our platform may contain content provided by third parties, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>User-submitted photos and reviews</li>
                  <li>Embedded content from third-party platforms (e.g., YouTube videos)</li>
                  <li>Links to third-party websites</li>
                  <li>Content from our partners and affiliates</li>
                </ul>
                <p className="text-muted-foreground">
                  Third-party content remains the property of its respective owners. We do not claim ownership of third-party
                  content and are not responsible for its accuracy, legality, or copyright status.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Photography and Images</h2>
                <p className="text-muted-foreground mb-4">
                  All photographs and images on our platform, unless otherwise noted, are:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Owned by Staying in Bern</li>
                  <li>Licensed from stock photography services</li>
                  <li>Provided by users with appropriate permissions</li>
                  <li>Used with permission from copyright holders</li>
                </ul>
                <p className="text-muted-foreground">
                  Unauthorized use of any images from our platform may violate copyright laws, trademark laws, privacy and
                  publicity laws, and communications regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Fair Use and Educational Purposes</h2>
                <p className="text-muted-foreground mb-4">
                  Limited use of our Content may be permitted under fair use principles for purposes such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Academic research and education</li>
                  <li>News reporting and commentary</li>
                  <li>Criticism and review</li>
                </ul>
                <p className="text-muted-foreground">
                  However, such use must comply with applicable copyright laws and should include proper attribution. If you
                  are unsure whether your intended use qualifies as fair use, please contact us for clarification.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Copyright Infringement</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.1 Reporting Copyright Violations</h3>
                <p className="text-muted-foreground mb-4">
                  If you believe that your copyrighted work has been used on our platform in a way that constitutes copyright
                  infringement, please provide us with the following information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>A description of the copyrighted work you claim has been infringed</li>
                  <li>A description of where the allegedly infringing material is located on our platform</li>
                  <li>Your contact information (address, telephone number, email)</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement that the information in your notice is accurate and, under penalty of perjury, that you
                    are the copyright owner or authorized to act on behalf of the copyright owner</li>
                  <li>Your physical or electronic signature</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.2 DMCA Takedown Procedure</h3>
                <p className="text-muted-foreground mb-4">
                  We comply with the Digital Millennium Copyright Act (DMCA) and similar international regulations. Upon
                  receiving a valid copyright infringement notice, we will:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Promptly investigate the claim</li>
                  <li>Remove or disable access to the allegedly infringing material if the claim is valid</li>
                  <li>Notify the user who posted the content</li>
                  <li>Take appropriate action against repeat infringers, including account termination</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Requesting Permission</h2>
                <p className="text-muted-foreground mb-4">
                  If you wish to use our Content in a way that exceeds the permitted use outlined in this notice, you must
                  obtain our prior written permission. To request permission:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Email us at hello@stayinginbern.com with the subject line "Copyright Permission Request"</li>
                  <li>Describe the Content you wish to use</li>
                  <li>Explain how you intend to use it</li>
                  <li>Specify the duration and geographic scope of the intended use</li>
                  <li>Provide information about your organization or purpose</li>
                </ol>
                <p className="text-muted-foreground mt-4">
                  We will review your request and respond within 10 business days. Please note that permission is granted
                  on a case-by-case basis and may be subject to conditions and fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Enforcement</h2>
                <p className="text-muted-foreground mb-4">
                  We actively monitor and enforce our copyright and intellectual property rights. Unauthorized use of our
                  Content may result in:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Cease and desist notices</li>
                  <li>Account suspension or termination</li>
                  <li>Legal action and claims for damages</li>
                  <li>Criminal prosecution where applicable</li>
                </ul>
                <p className="text-muted-foreground">
                  Violations of copyright law may be punishable by substantial monetary damages and criminal penalties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Updates to This Notice</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify this Copyright Notice at any time. Any changes will be effective immediately
                  upon posting to our platform. Your continued use of our platform following the posting of changes constitutes
                  your acceptance of such changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For copyright-related questions, permission requests, or to report copyright infringement, please contact:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground"><strong>Copyright Agent</strong></p>
                  <p className="text-foreground"><strong>Staying in Bern</strong></p>
                  <p className="text-muted-foreground">Email: hello@stayinginbern.com</p>
                  <p className="text-muted-foreground">Subject Line: Copyright Notice/Request</p>
                  <p className="text-muted-foreground">Location: Bern, Switzerland</p>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-sm text-blue-800 mb-2">
                    <strong>📝 Summary:</strong>
                  </p>
                  <p className="text-sm text-blue-700">
                    All content on Staying in Bern is protected by copyright. You may view and use our platform for personal
                    purposes, but you may not copy, distribute, or use our content commercially without permission. If you
                    believe your copyright has been violated or if you wish to use our content, please contact us.
                  </p>
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
