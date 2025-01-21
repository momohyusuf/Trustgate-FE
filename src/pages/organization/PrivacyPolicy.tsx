import PublicPagesWrapper from "../../components/ui/containerWrappers/PublicPagesWrapper";

const PrivacyPolicy = () => {
  return (
    <PublicPagesWrapper>
      <section className="max-w-[1000px] mx-auto mb-24">
        <h1 className="mb-10 font-bold text-center lg:text-left leading-snug lg:leading-[64px] font-playfair text-3xl lg:text-6xl text-grey-600 tracking-wider">
          Privacy Policy
        </h1>

        <h3 className="text-lg lg:text-[1.20rem] tracking-wide text-center lg:text-left  font-inter mb-10 underline underline-offset-4">
          <span className="font-medium ">Effective Date: </span>January 2025
        </h3>
        <p className="text-base font-inter text-grey-600 mb-10 text-center lg:text-left">
          Welcome to TrustGate Enterprise. We value your trust and are committed
          to safeguarding your privacy. This Privacy Policy outlines how we
          collect, use, and protect the information you provide when using our
          website and services.
        </p>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            1. Information We Collect
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We collect the following types of information to enhance your
            experience and ensure the smooth operation of our services:
          </p>

          <ListItem
            items={[
              "Personal Information: This includes your name, email address, and any other details you provide during account registration or communication with us.",
              "Usage Data: Information such as your IP address, device details, browser type, and website activity to analyze and improve our services.",
              "Service Data: Information related to the purchase and use of virtual phone numbers.",
            ]}
          />
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            2. How We Use Your Information
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We use the information collected to:
          </p>

          <ListItem
            items={[
              "Provide and enhance our services.",
              "Process and fulfill your service requests efficiently.",
              "Send transactional communications, such as purchase confirmations.",
              "Respond promptly to inquiries or support requests.",
            ]}
          />
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            3. Payment Processing
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            At TrustGate Enterprise, we do not collect or store payment details
            directly. All transactions are securely handled by trusted
            third-party payment gateways. Please refer to their privacy policies
            to understand how they manage your payment information.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            4. Data Sharing and Disclosure
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We do not sell or rent your personal information. However, we may
            share your data with:
          </p>

          <ListItem
            items={[
              "Service Providers: To perform essential operations, including email delivery or technical support.",
              "Legal Authorities: When required by law or necessary to protect our rights and users.",
            ]}
          />
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            5. Data Security
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            Your data security is our priority. We implement industry-standard
            measures to protect your personal information. However, no security
            system is completely foolproof, and we cannot guarantee absolute
            protection.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            6. Cookies and Tracking Technologies
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We use cookies and similar tools to:
          </p>
          <ListItem
            items={[
              "Enhance your user experience.",
              "Monitor website performance.",
              "Personalize content and services.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            You can control or disable cookies through your browser settings.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            7. Third-Party Links
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            Our website may include links to third-party websites. We are not
            responsible for their privacy practices or content. Please review
            their policies before sharing your information.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            8. Your Rights
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            You have the right to:
          </p>
          <ListItem
            items={[
              "Access, update, or delete your personal information.",
              "Opt out of non-essential communications.",
              "Withdraw your consent for data processing, where applicable.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            To exercise these rights, contact us at [support@trustgate.site].
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            9. Changes to This Privacy Policy
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. Please
            review this page periodically to stay informed.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            10. Contact Us
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            If you have questions or require assistance, please contact us:
          </p>
          <ListItem items={["Email: [support@trustgate.site]"]} />
        </div>
      </section>
    </PublicPagesWrapper>
  );
};

export default PrivacyPolicy;

function ListItem({ items }: { items: string[] }) {
  return (
    <ul className="text-base font-inter text-grey-600 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
